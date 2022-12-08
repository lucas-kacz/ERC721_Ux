import { useState } from "react";
import { getTokenURI, init, mintToken, numberOfTokens } from "./Web3Client";

function FakeBayc() {

  const [minted, setMinted] = useState(false);
  const [balance, setBalance] = useState(0);
  const [URI, setURI] = useState("");

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

  const getURI = async () =>{
    getTokenURI().then(URI => {
      setURI(URI);
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

    <p>The token URI is {URI}</p>
    <button onClick={() => getURI()}>GET URI</button>

    </div>
  );
}

export default FakeBayc;