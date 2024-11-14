import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { Wallet, HDNodeWallet } from "ethers";


const EthereumWallet = ({mnemonic}:{mnemonic:string}) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
     const [addresses, setAddresses] = useState<string[]>([]);

     const generateWallet = async () => {

        const seed = await mnemonicToSeed(mnemonic);

        // 60 for ethereum
        const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
        
        const hdNode = HDNodeWallet.fromSeed(seed);                 
        const child = hdNode.derivePath(derivationPath);                 
        const privateKey = child.privateKey;
                 
        const wallet = new Wallet(privateKey);
        console.log(wallet);
                 
        setCurrentIndex(currentIndex + 1);
                
        setAddresses((prevAddresses) => [...prevAddresses, wallet.address]);
    }

    

  return (
< >   <div className="m-4">EthereumWallet</div>
<div> 
    <button className="m-3 bg-red-800 text-white p-2 rounded-md" onClick={generateWallet}>Generate Wallet</button>
</div>
        
        <div>
            {addresses.map((address, index) => (
                <div key={index}>
                    Address {index + 1}: {address}
                </div>
            ))}
        </div>
        
        </>  )
}

export default EthereumWallet;

