import { useEffect, useState } from "react";
import Web3 from "web3";
import fakeNefturians from "../../../../ContractsAbi/FakeNefturians.json";

let web3 = new Web3(window.ethereum);
var contract = new web3.eth.Contract(fakeNefturians.abi, "0x9bAADf70BD9369F54901CF3Ee1b3c63b60F4F0ED");

function FakeNefturiansUserAddress(){

    const[balance, setBalance] = useState();

    async function getTokenInfo(){
        const accounts = await window.ethereum.request({method : 'eth_requestAccounts'});
        let value = await contract.methods.balanceOf(accounts[0]).call();
        setBalance(value);
    }

}

export default FakeNefturiansUserAddress;