<script setup lang="ts">
import { ethers, type BrowserProvider, type Contract, type WebSocketProvider } from 'ethers';
import { ref, onMounted } from 'vue'
const infuraKey = import.meta.env.VITE_INFURA_API_KEY;
import HelloWorld from './components/HelloWorld.vue'
import cryptoZombiesABI from './ABI/cryptozombies_abi'

declare global {
  interface Window {
    ethereum: any;
  }
}

type Zombie = {
  name: string;
  dna: number;
  level: number;
  winCount: number;
  lossCount: number;
}

let signer: any = null;
let cryptoZombies: any = null;
let cryptoZombieWithSigner: any = null;
let provider: any = null;
let wsProvide: any = null;
let wsContract: any = null;
let userAccount: string = '';
let zombies = ref<Zombie[]>([])
let tipsText = ref<string>("")
let name = ref<string>("")


// 网络配置表
const NETWORK_CONFIG: Record<string, { name: string; rpc: string; ws: string; contract: string }> = {
  '0x1': { // Ethereum Mainnet
    name: 'mainnet',
    rpc: `https://mainnet.infura.io/v3/${infuraKey}`,
    ws: `wss://mainnet.infura.io/ws/v3/${infuraKey}`,
    contract: '0xYourMainnetContractAddress', // TODO: 替换为主网合约地址
  },
  '0xaa36a7': { // Sepolia
    name: 'sepolia',
    rpc: `https://sepolia.infura.io/v3/${infuraKey}`,
    ws: `wss://sepolia.infura.io/ws/v3/${infuraKey}`,
    contract: '0x9A840369D31D87c29AcbF733Cd11bdC26D4E6DE8',
  },
  '0x4268': { // Holesky
    name: 'holesky',
    rpc: `https://holesky.infura.io/v3/${infuraKey}`,
    ws: `wss://holesky.infura.io/ws/v3/${infuraKey}`,
    contract: '0x163c8af8792ca93F1098Eb6B306582a3267a2ba4', // TODO: 替换为 holesky 合约地址
  },
  // 可继续添加其他网络
};

const switchToSepolia = async () => {
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0xaa36a7' }] // Sepolia 链ID
    });
    startApp(); // 切换网络后重新初始化 DApp
  } catch (error) {
    console.error("Error switching to Sepolia:", error);
    // 如果用户未添加Sepolia网络，引导添加
    // if (error.code === 4902) {
    //   await addSepoliaNetwork();
    // }
  }
}

const handleAccountsChanges = async (accounts: string[]) => {
  console.log("handleAccountsChanges: ", accounts)
  if (accounts.length === 0) {
    console.log("Please connect to MetaMask.")
    // updateInterface()
  } else {
    if (accounts[0] !== userAccount) {
      userAccount = accounts[0]
    }
  }
  if (!userAccount) {
    return
  }
  const result: number[] = await getZombiesByOwner(userAccount)
  console.log(result)
  displayZombies(result)
}

const displayZombies = async (ids: number[]) => {
  zombies.value = []
  for (const id of ids) {
    const zombie = await getZombieDetails(id)
    if (!zombie) {
      continue
    }
    zombies.value.push(zombie)
  }
}

const createdRandomZombie = async (name: string) => {
  if (!cryptoZombieWithSigner) {
    console.error("Contract or Signer not initialized")
    return
  }
  try {
    const tx = await (cryptoZombieWithSigner as any).createRandomZombie(name, { gasLimit: 1000000 });
    tipsText.value = '正在区块链上创建僵尸，这将需要一会儿...'
    await tx.wait()
    tipsText.value = `成功创建了${name}!`
    console.log("current userAccount: ", userAccount)
    if (!userAccount) {
      return
    }
    const result: number[] = await getZombiesByOwner(userAccount)
    displayZombies(result) 
    console.log("Zombie created successfully", result)
  } catch (error) {
    console.error("Error creating zombie:", error)
    tipsText.value = error as string
  }
}

const feedOnkitty = async (zombieId: number, kittyId: number) => {
  if (!cryptoZombieWithSigner) {
    console.error("Contract or Signer not initialized")
    return
  }
  try {
    const tx = await (cryptoZombieWithSigner as any).feedOnkitty(zombieId, kittyId, { gasLimit: 1000000 });
    tipsText.value = '正在吃猫咪，这将需要一会儿...'
    await tx.wait()
    tipsText.value = `吃了一只猫咪并生成了一只新僵尸！`
    if (!userAccount) {
      return
    }
    const result: number[] = await getZombiesByOwner(userAccount)
    displayZombies(result)
  } catch (error) {
    tipsText.value = error as string
  }
}

const levelUp = async (zombieId: number) => {
  if (!cryptoZombieWithSigner) {
    console.error("Contract or Signer not initialized")
    return
  }
  try {
    const tx = await (cryptoZombieWithSigner as any).levelUp(zombieId, { value: ethers.parseUnits('0.01', 'ether') });
    tipsText.value = '正在升级您的僵尸...'
    await tx.wait()
    tipsText.value = `不得了了！僵尸成功升级啦！`
  } catch (error) {
    tipsText.value = error as string
  }
}

const startApp = async () => {
  try {
    if (typeof window === 'undefined' || !window.ethereum) {
      throw new Error("MetaMask not installed; using read-only defaults")
    }
    provider = new ethers.BrowserProvider(window.ethereum)
    signer = await provider.getSigner();
    const network = await provider.getNetwork();
    const chainId = window.ethereum.chainId || `0x${network.chainId.toString(16)}`;
    console.log('当前 provider 连接的网络:', network.name, network.chainId, 'chainId:', chainId);

    const config = NETWORK_CONFIG[chainId];
    if (!config) {
      tipsText.value = `不支持的网络: ${chainId}`;
      throw new Error(`不支持的网络: ${chainId}`);
    }

    cryptoZombies = new ethers.Contract(
      config.contract,
      cryptoZombiesABI,
      provider
    ) as Contract;
    wsProvide = new ethers.WebSocketProvider(config.ws)
    wsContract = new ethers.Contract(
      config.contract,
      cryptoZombiesABI,
      wsProvide
    ) as Contract;
    console.log('cryptoZombies:', cryptoZombies)
    console.log('signer:', signer)
    if (cryptoZombies && signer) {
      cryptoZombieWithSigner = cryptoZombies.connect(signer)
    } else {
      throw new Error("Contract or Signer not initialized")
    }

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    console.log('current accounts0:', accounts)
    if (accounts.length > 0) {
      userAccount = accounts[0]
      const result: number[] = await getZombiesByOwner(userAccount)
      console.log('current result:', result)
      if (result?.length) displayZombies(result) 
    }

    window.ethereum.on("accountsChanged", handleAccountsChanges)
    wsContract.on("Transfer", (from: string, to: string, tokenId: number) => {
      console.log(`Zombie ${tokenId} transferred from ${from} to ${to}`)
      if (to === userAccount) {
        displayZombies([tokenId])
      }
    })
  } catch (error) {
    console.error(error)
    provider = ethers.getDefaultProvider()
  }
}

const getZombieDetails = async (id: number) => {
  try {
    if (!cryptoZombies) {
      throw new Error("Contract not initialized");
    }
    const zombie: Zombie = await (cryptoZombies as any).zombies(id)
    return zombie
  } catch (error) {
    console.log(error)
  }
}

const zombieToOwner = async (id: number) => {
  try {
    if (!cryptoZombies) {
      throw new Error("Contract not initialized");
    }
    const zombieOwner = await (cryptoZombies as any).zombieToOwner(id)
    console.log('zombieOwner: ', zombieOwner)
  } catch (error) {
    console.log(error)
  }
}

const getZombiesByOwner = async (owner: string) => {
  console.log('getZombiesByOwner owner:', owner)
  try {
    if (!cryptoZombies) {
      throw new Error("Contract not initialized");
    }
    return await (cryptoZombies as any).getZombiesByOwner(owner)
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  startApp()
  if (window.ethereum && window.ethereum.on) {
    window.ethereum.on("chainChanged", (chainId: string) => {
      console.log('MetaMask 网络已切换，chainId:', chainId)
      startApp() // 重新初始化 DApp
    })
    console.log('MetaMask chainChanged 事件监听已注册')
  } else {
    console.warn('window.ethereum 不存在或不支持事件监听')
  }
})
</script>

<template>
  <div>
    <div v-if="tipsText" class="tips-text">{{ tipsText }}</div>
    <div class="zombie-wrap">
      <ul v-for="zombie in zombies" :key="zombie.dna">
        <li>{{ zombie.name }}</li>
        <li>{{ zombie.dna }}</li>
        <li>{{ zombie.level }}</li>
        <li>{{ zombie.winCount }}</li>
        <li>{{ zombie.lossCount }}</li>
      </ul>
    </div>
    <div class="create-wrap">
      <input type="text" v-model="name" />
      <button @click="createdRandomZombie(name)">创建僵尸</button>
    </div>
    <div @click="switchToSepolia">切换网络</div>
    <div @click="zombieToOwner(0)">zombieToOwner</div>
    <div @click="levelUp(0)">升级</div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
