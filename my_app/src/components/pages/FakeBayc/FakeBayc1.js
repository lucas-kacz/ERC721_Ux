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
            <div>{name}</div>
            <div>{totalTokenNumber}</div>

            <br/>
            <button className="test" onClick={mintToken}>Mint Token</button>
            <br/>
            <input type="number" value={tokenId} onChange={e=>handleInput(e)}/>
            <br/>


            {!isMinted && 
                <Link to={`/fakebayc/${tokenId}`}>Get Infos</Link>
            }

            <nav className="back">
                <Link to ="/"> Go back to Main page</Link> 
                {/* <Link to={"/fakebayc/:tokenId"}>Get Infos</Link> */}
            </nav>
        </div>
    )
}

export default FakeBayc1;