import { useState } from "react";
import { generateMnemonic } from "bip39";

const SeedGenerator = ({ handleSeedChange}:{handleSeedChange: (mnemonic:string) => void}) => {
    
    const [inputSeed, setInputSeed] = useState<string>("");
   

    const generateSeed = async () => {
        if(inputSeed===""){
            const mnemonic = await generateMnemonic();
                handleSeedChange(mnemonic);
            }else{
            // more validation and error handling needed
            handleSeedChange(inputSeed);
        }

    }
  return (
    <div className="m-4">
        <input type="text" value={inputSeed} onChange={(e) => setInputSeed(e.target.value)} placeholder="Enter your mnemonic phrase / Leave Empty for Random" className="w-96 p-2 rounded-md shadow-md bg-gray-800 text-gray-200 text-center" />
        <button onClick={generateSeed} className="m-3 bg-gray-800 text-white  p-2 rounded-md shadow-md hover:bg-gray-700 hover:scale-105 transform transition duration-300 ease-in-out">
            Generate
        </button>
   
    </div>
  )
}

export default SeedGenerator