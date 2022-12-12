import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
//import AppRoutes from "../../Routes";
import Login from "../Login/Login";
import ChainInfo from "../ChainInfo/ChainInfo";
import Web3 from "web3";
import WrongNetwork from "../Wrong Network/Wrong_network";
//import {mintToken, init} from "../FakeBayc/Web3Client";
import "./Main.module.css";


export const Main = (props) => {

  const [isConnected, setIsConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [chainId, setChainId] = useState("");
  const [lastBlockNumber, setBlockNumber] = useState("");
  const [wrongNetwork, setWrongNetwork] = useState();

  //const [minted, setMinted] = useState(false);

  const onLogin = async (provider) => {
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    let chainId = await web3.eth.getChainId();
    let lastBlockNumber = await web3.eth.getBlockNumber();

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
      setBlockNumber(lastBlockNumber);
      setIsConnected(true);
    }
  };

  const onLogout = () => {
    setIsConnected(false);
  };



  return (
    <div className="Main">
      <header className="main-header">
        <h1>ERC721_UX</h1>
        <nav className="nav">
          <ul>
            <li>
              <a href="/">{currentAccount}</a>
            </li>
          </ul>
          </nav>
      </header>
      <main>
        {!isConnected && <Login onLogin={onLogin} onLogout={onLogout}/>}
        {/* {isConnected && <Home currentAccount={currentAccount} />} */}
        {isConnected && <ChainInfo chainId={chainId} lastBlockNumber={lastBlockNumber} />}
        
        <nav>
          <Link to ="/fakebayc">FakeBayc</Link>
        </nav>

      </main>
    </div>
  );
}

export default Main;
