import { useState } from "react";
import { init, mintToken, numberOfTokens } from "./Web3Client";

function FakeBayc() {

  const [minted, setMinted] = useState(false);
  const [balance, setBalance] = useState(0);

  const claimAToken = () => {
    mintToken()
      .then(tx => {
        console.log(tx)
        setMinted(true);
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  const fetchBalance = async () =>{
    numberOfTokens().then(balance => {
      setBalance(balance);
    }).catch(err =>{
      console.log(err);
    })
  };

  return(
    <div>
        {!minted ? (
          <button onClick={() => claimAToken()}>Mint token</button>
        ) : (
          <p>Token minted Succesfully</p> 
        )}

    <p>The total supply of tokens is {balance}</p>
    <button onClick={() => fetchBalance()}>Refresh balance</button>

    </div>
  );
}

export default FakeBayc;