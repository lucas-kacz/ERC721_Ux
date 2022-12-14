import { use } from "chai";
import { useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";
import Web3 from "web3";
import sig from "../../../ContractsAbi/output-sig.json"
import fakeMeebits from "../../../ContractsAbi/FakeMeebitsClaimer.json";

let web3 = new Web3(window.ethereum);
var contract = new web3.eth.Contract(fakeMeebits.abi, "0x5341e225Ab4D29B838a813E380c28b0eFD6FBa55");

function FakeMeebits(){

    const [tokenId, setTokenId] = useState(0);
    const [isAllowed, setIsAllowed] = useState(false);

    const handleInput = (event) =>{
        setTokenId(event.target.value)
    }

    async function mintToken(){
        const accounts = await window.ethereum.request({method : 'eth_requestAccounts'});
        console.log(tokenId);

        if (await contract.methods.tokensThatWereClaimed(tokenId).call() === true){
            alert("Token already claimed !");
            throw Error("Token already claimed !");
        }
        else{
            const signature = sig[tokenId].signature;
            const allowed = await contract.methods.claimAToken(tokenId, signature).send({from : accounts[0]});

            if (allowed) {
                setIsAllowed(true);
            }
            else{
                alert("Please try again");
            }
        }
    }
    

    return(
        <div className="fake_nefturian">

            <div className="navbar">
                <span><Link to ="/"> Go back to Main page</Link></span>
            </div>  

            <input type="number" value={tokenId} onChange={e=>handleInput(e)}/>
            <br/>
            <button className="test" onClick={mintToken}>Buy Token</button>
        </div>
    );
}

export default FakeMeebits;