import { useState } from "react";
import { getTokenURI, init, mintToken, name, numberOfTokens, } from "./Web3Client";
import { Link } from "react-router-dom";

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
  
  const fetchSupply = async () =>{
    numberOfTokens().then(balance => {
      setBalance(balance);
    }).catch(err =>{
      console.log(err);
    })
  };

  const fetchName = async () =>{
    name().then(balance => {
      setBalance(balance);
    }).catch(err =>{
      console.log(err);
    })
  };


  return(
    <div className="fake_nefturian">
        {!minted ? (
          <button onClick={() => claimAToken()}>Mint token</button>
        ) : (
          <p>Token minted Succesfully</p> 
        )}

    <br/><br/>

    <button onClick={() => fetchSupply()}>Refresh balance</button>
    <div className="Supply">{balance}</div>

    <br/><br/>
    <Link to ="/fakebayc/:tokenId">FakeBayc</Link>
    </div>
  );
}

export default FakeBayc;