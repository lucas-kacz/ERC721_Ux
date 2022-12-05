import Web3 from "web3";
import { useState } from "react";
import Login from "../Login/Login";
import NFTContractBuild from "../../../ContractsAbi/FakeBayc.json";
import Main from "../Main/Main";

function FakeBayc(){

    // const web3 = new Web3(provider);
    // let chainId =  web3.eth.getChainId();

    const [isConnected, setIsConnected] = useState(false);
    const [currentAccount, setCurrentAccount] = useState(null);
    const [chainId, setChainId] = useState("");
    const [lastBlockNumber, setBlockNumber] = useState("");
    const [wrongNetwork, setWrongNetwork] = useState();
  
    const onLogin = async (provider) => {
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    let chainId = await web3.eth.getChainId();
  
    if (accounts.length === 0){
    console.log("Please connect to Metamask")
    }
    else if (chainId !== 11155111){
    window.open("/wrong-network", "_self");
    setIsConnected(false);
    }
    else if (accounts[0] !== currentAccount){
    setCurrentAccount(accounts[0]);
    setChainId(chainId);
    setIsConnected(true);
    }
    };
  
    const onLogout = () => {
      setIsConnected(false);
    };

    


    return ( 
        <div>
            <main>
                {!isConnected && <Login onLogin={onLogin} onLogout={onLogout}/>}

            </main>
        </div>
    );
};

export default FakeBayc;