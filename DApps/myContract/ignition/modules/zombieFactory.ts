import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import hre from 'hardhat'

const ZombieFactoryModule = buildModule("ZombieFactoryModule", (m) => {
  const zombieFactory = m.contract("ZombieFactory", []);
  return { zombieFactory };
});

export default ZombieFactoryModule;
