import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Web3 from "web3";
import fakeBayc from "../../../ContractsAbi/FakeBayc.json"

let web3 = new Web3(window.ethereum);
var contract = new web3.eth.Contract(fakeBayc.abi, "0x1dA89342716B14602664626CD3482b47D5C2005E");

function FakeBayc1(){

    const [name, setName] = useState();
    const [totalTokenNumber, setTotalTokenNumber] = useState();

    useEffect(()=>{
        getNameAndTotalTokenNumber()
    })

    async function getNameAndTotalTokenNumber(){
        let na = await contract.methods.name().call();
        setName(na);

        let total = await contract.methods.tokenCounter().call();
        setTotalTokenNumber(total);
    }

    async function mintToken(){
        const accounts = await window.ethereum.request({method :"eth_requestAccounts"});
        await contract.methods.claimAToken().send({from : accounts[0]});
    }


    return(
        <div className="fake_nefturian">
            <div>{name}</div>
            <div>{totalTokenNumber}</div>

            <br/>
            <button className="test" onClick={mintToken}>Mint Token</button>

            <nav className="back">
                <Link to ="/fakebayc/:tokenId">FakeBayc</Link>
                <Link to ="/"> Go back to Main page</Link> 
            </nav>
        </div>
    )
}

export default FakeBayc1;