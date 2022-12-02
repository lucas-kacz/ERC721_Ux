import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/Routes";
import Login from "./components/pages/Login/Login";
import Home from "./components/pages/Home/Home";
import Web3 from "web3";

function App() {

  const [isConnected, setIsConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);

  const onLogin = async (provider) => {
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts()
    if (accounts.length === 0){
      console.log("Please connect to Metamask")
    }
    else if (accounts[0] !== currentAccount){
      setCurrentAccount(accounts[0]);
      setIsConnected(true);
    }
  };

  const onLogout = () => {
    setIsConnected(false);
  };

  return (
    <div className="App">
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
        <Router>
          <AppRoutes />
        </Router>

        {!isConnected && <Login onLogin={onLogin} onLogout={onLogout}/>}
        {isConnected && <Home currentAccount={currentAccount} />}
      </main>
    </div>
  );
}

export default App;
