import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/Routes";

function App() {

  // const [isConnected, setIsConnected] = useState(false);
  // const [currentAccount, setCurrentAccount] = useState(null);
  // const [chainId, setChainId] = useState("");
  // const [lastBlockNumber, setBlockNumber] = useState("");
  // const [wrongNetwork, setWrongNetwork] = useState();

  // const onLogin = async (provider) => {
  //   const web3 = new Web3(provider);
  //   const accounts = await web3.eth.getAccounts();
  //   let chainId = await web3.eth.getChainId();
  //   let lastBlockNumber = await web3.eth.getBlockNumber();

  //   if (accounts.length === 0){
  //     console.log("Please connect to Metamask")
  //   }
  //   else if (chainId !== 11155111){
  //     setWrongNetwork(true);
  //     setIsConnected(false);
  //   }
  //   else if (accounts[0] !== currentAccount){
  //     setCurrentAccount(accounts[0]);
  //     setChainId(chainId);
  //     setBlockNumber(lastBlockNumber);
  //     setIsConnected(true);
  //   }
  // };

  // const onLogout = () => {
  //   setIsConnected(false);
  // };

  return (
    // <div className="App">
    //   <header className="main-header">
    //     <h1>ERC721_UX</h1>
    //     <nav className="nav">
    //       <ul>
    //         <li>
    //           <a href="/">{currentAccount}</a>
    //         </li>
    //       </ul>
    //       </nav>
    //   </header>
    //   <main>
        
        <Router>
          <AppRoutes />
        </Router>

    //     {/* {!isConnected && <Login onLogin={onLogin} onLogout={onLogout}/>}
    //     {isConnected && <Home currentAccount={currentAccount} />}
    //     {isConnected && <ChainInfo chainId={chainId} lastBlockNumber={lastBlockNumber} />}
    //     {wrongNetwork && <WrongNetwork/>} */}

    //   </main>
    // </div>
  );
}

export default App;
