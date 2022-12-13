import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Web3 from "web3";
import fakeNefturians from "../../../ContractsAbi/FakeNefturians.json"

let web3 = new Web3(window.ethereum);
var contract = new web3.eth.Contract(fakeNefturians.abi, "0x9bAADf70BD9369F54901CF3Ee1b3c63b60F4F0ED");

function FakeNefturians(){

    const[price, setPrice] = useState();
    const[pricetoEth, setPricetoEth] = useState()

    useEffect(()=>{
        getPrice();
    })

    async function getPrice(){
        let prix = await contract.methods.tokenPrice().call();
        setPrice(prix)
        setPricetoEth(web3.utils.fromWei(String(price)));
        console.log(pricetoEth);
    }

    async function buyToken(){
        const accounts = await window.ethereum.request({method : 'eth_requestAccounts'});
        await contract.methods.buyAToken().send({from : accounts[0], value: price})
    }

    return(
        <div className="fake_nefturian">
            <br/>
            <div>Le prix d'un token est de {pricetoEth} eth</div>

            <br/>
            <button className="test" onClick={buyToken}>Buy Token</button>
            
            <nav className="back">
                <Link to ="/"> Go back to Main page</Link> 
            </nav>  
        </div>
    )
}

export default FakeNefturians;