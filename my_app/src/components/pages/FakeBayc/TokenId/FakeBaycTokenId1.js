import { useEffect, useState } from "react";
import { json, Link } from "react-router-dom";
import { IpfsImage } from "react-ipfs-image";
import Web3 from "web3";
import fakeBayc from "../../../../ContractsAbi/FakeBayc.json"


function FakeBaycTokenId1(){

    const[tokenId, setTokenId] = useState("");
    const[attribute, setAttribute] = useState();
    const[image, setImage] = useState();

    let web3 = new Web3(window.ethereum);
    var contract = new web3.eth.Contract(fakeBayc.abi, "0x1dA89342716B14602664626CD3482b47D5C2005E");
    
    const handleInput = (event) =>{
        setTokenId(event.target.value)
    }

    async function getURI(){

        let URI = await contract.methods.tokenURI(tokenId).call();
        const jsonURI = await fetch(URI).then(response => response.json())

        setAttribute(JSON.stringify(jsonURI.attributes))
        setImage(jsonURI.image)
    }

    return(
        <div className="fake">
            <input type="number" value={tokenId} onChange={e=>handleInput(e)}/>
            <br/>
            <button onClick={getURI}> Get token info</button>
            <br/>
            <div className="Info">{attribute}</div>
            <br/>
            

            {image !== "" &&
                <>
                    <IpfsImage hash={image}/>
                </>
            }
        </div>
    )
}

export default FakeBaycTokenId1;