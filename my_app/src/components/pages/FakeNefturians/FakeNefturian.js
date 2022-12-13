import { useState } from "react";
import Web3 from "web3";
import fakeNefturians from "../../../ContractsAbi/FakeNefturians.json"

let web3 = new Web3(window.ethereum);
var contract = new web3.eth.Contract(fakeNefturians.abi, "0x9bAADf70BD9369F54901CF3Ee1b3c63b60F4F0ED");

function FakeNefturians(){

}

export default FakeNefturians;