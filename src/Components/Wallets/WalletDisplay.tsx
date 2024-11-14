import { useState } from "react";
import EthereumWallet from "./EthereumWallet";
import SeedDisplay from "./MnemonicDisplay";
import SeedGenerator from "./MnemonicGenerator";

// To control the options for the wallet selected
type WalletOptions = "Solana" | "Ethereum" | null;

const WalletDisplay = () => {
    const [selectedWallet, setSelectedWallet] = useState<WalletOptions>(null);
    const [mnemonic, setSeed] = useState<string>("");
    const selectWallet = (wallet: WalletOptions) => {
        
        setSelectedWallet(wallet);
    }

    const handleSeedChange = (mnemonic:string) => {
        setSeed(mnemonic);
    }
    return (
    <div>
      
     
      {!mnemonic && <div><SeedGenerator   handleSeedChange={handleSeedChange} /></div>}
        {mnemonic && <div><SeedDisplay mnemonic={mnemonic} /></div>}
        {mnemonic && <div>
        
            <button onClick={() => selectWallet("Solana")} className="m-2 bg-gray-800 text-white p-2 rounded-md shadow-md hover:bg-gray-700 hover:scale-105 transform transition duration-300 ease-in-out">
        Solana
      </button>
      <button onClick={() => selectWallet("Ethereum")} className="m-2 bg-gray-800 text-white p-2 rounded-md shadow-md hover:bg-gray-700 hover:scale-105 transform transition duration-300 ease-in-out">
        Ethereum
      </button>
        </div>}
        {selectedWallet=='Ethereum' && <div><EthereumWallet mnemonic={mnemonic}  /></div>}
    </div>

  )
}

export default WalletDisplay