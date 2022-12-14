import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Web3 from "web3";
import fakeBayc from "../../../ContractsAbi/FakeBayc.json"

let web3 = new Web3(window.ethereum);
var contract = new web3.eth.Contract(fakeBayc.abi, "0x1dA89342716B14602664626CD3482b47D5C2005E");

function FakeBayc1(){

    const [name, setName] = useState();
    const [totalTokenNumber, setTotalTokenNumber] = useState();
    const[tokenId, setTokenId] = useState("");
    const[isMinted, setIsMinted] = useState("");

    useEffect(()=>{
        getNameAndTotalTokenNumber()
    })

    const handleInput = (event) =>{
        setTokenId(event.target.value)
    }

    async function getNameAndTotalTokenNumber(){
        let na = await contract.methods.name().call();
        setName(na);

        let total = await contract.methods.tokenCounter().call();
        setTotalTokenNumber(total);
    }

    async function mintToken(){
        const accounts = await window.ethereum.request({method :"eth_requestAccounts"});
        await contract.methods.claimAToken().send({from : accounts[0]});
        setIsMinted(true);
    }


    return(
        <div className="fake_nefturian">
            <nav className="navbar">
                <div className="nav-links">
                    <ul>
                        <p><Link to ="/"> Go back to Main page</Link></p>
                    </ul>
                </div>
            </nav>
            
            <div>
                Collection : {name}. 
                <br/>
                The total supply is : {totalTokenNumber}
            </div>

            <br/>
            <button onClick={mintToken}>Mint Token</button>
            <br/>

            <input type="number" value={tokenId} onChange={e=>handleInput(e)}/>
            <br/>

            <button onClick={() => window.location.href = `/fakebayc/${tokenId}`}>Get data from Id</button>

        </div>
    )
}

export default FakeBayc1;