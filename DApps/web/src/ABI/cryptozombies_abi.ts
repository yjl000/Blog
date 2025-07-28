type ABIItem = {
  constant?: boolean;
  inputs?: {
    name: string;
    type: string;
    indexed?: boolean;
  }[];
  name?: string;
  outputs?: {
    name: string;
    type: string;
  }[];
  payable?: boolean;
  stateMutability?: 'pure' | 'view' | 'nonpayable' | 'payable';
  type: 'function' | 'constructor' | 'event' | 'fallback';
  anonymous?: boolean;
};

type ABI = ABIItem[];
import zombieFactoryABI from './zombieFactory_abi.json';

const cryptoZombiesABI = [
  ...zombieFactoryABI,
];

export default cryptoZombiesABI;
