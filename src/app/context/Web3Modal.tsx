// context/Web3Modal.tsx

"use client";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

// Your WalletConnect Cloud project ID
export const projectId = "b94d80d977264f4214995a0886ecf384";

// 2. Set chains
// const mainnet = {
//   chainId: 1,
//   name: "Ethereum",
//   currency: "ETH",
//   explorerUrl: "https://etherscan.io",
//   rpcUrl: "https://cloudflare-eth.com",
// };

const mainnet = {
  chainId: 23413,
  name: "Gemini",
  currency: "AXC",
  explorerUrl: "https://scan.gemini.axiomesh.io",
  rpcUrl: "https://rpc5.gemini.axiomesh.io",
};

// 3. Create a metadata object
const metadata = {
  name: "happy-birthday-yanjun",
  description: "AppKit Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: "...", // used for the Coinbase SDK
  defaultChainId: 1, // used for the Coinbase SDK
});

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [mainnet],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
});

export function Web3Modal({ children }: any) {
  return children;
}
