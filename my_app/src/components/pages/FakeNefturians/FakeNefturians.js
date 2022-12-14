import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Web3 from "web3";
import fakeNefturians from "../../../ContractsAbi/FakeNefturians.json"

let web3 = new Web3(window.ethereum);
var contract = new web3.eth.Contract(fakeNefturians.abi, "0x9bAADf70BD9369F54901CF3Ee1b3c63b60F4F0ED");

function FakeNefturians(){

    const[price, setPrice] = useState();
    const[pricetoEth, setPricetoEth] = useState();
    const[address, setCurrentAddress] = useState("");

    useEffect(()=>{
        getPrice();
    })

    const handleInput = (event) =>{
        setCurrentAddress(event.target.value)
    }

    async function getPrice(){
        let price = await contract.methods.tokenPrice().call();
        setPrice(price*1.00001)
        setPricetoEth(web3.utils.fromWei(String(price)));
        console.log(pricetoEth);
    }

    async function buyToken(){
        const accounts = await window.ethereum.request({method : 'eth_requestAccounts'});
        await contract.methods.buyAToken().send({from : accounts[0], value: price})
    }

    return(
        <div className="fake_nefturian">
            
            <div className="navbar">
                <span><Link to ="/"> Go back to Main page</Link></span>
            </div>  

            <br/>
            <div>Le prix d'un token est de {pricetoEth} eth</div>

            <br/>
            <button className="test" onClick={buyToken}>Buy Token</button>
      
            <br/>
            <br/>

            <input type="text" value={address} onChange={e=>handleInput(e)}/>
            <br/>
            <button onClick={() => window.location.href = `/fakenefturians/${address}`}>Get tokens of address</button>
        
        </div>
    )
}

export default FakeNefturians;