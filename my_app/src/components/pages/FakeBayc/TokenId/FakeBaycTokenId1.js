import { useEffect, useState } from "react";
import { json, Link, useParams } from "react-router-dom";
import { IpfsImage } from "react-ipfs-image";
import Web3 from "web3";
import fakeBayc from "../../../../ContractsAbi/FakeBayc.json"


function FakeBaycTokenId1(){

    const[tokenId, setTokenId] = useState(0);
    const[attribute, setAttribute] = useState();
    const[image, setImage] = useState("");
    const {id} = useParams();

    let web3 = new Web3(window.ethereum);
    var contract = new web3.eth.Contract(fakeBayc.abi, "0x1dA89342716B14602664626CD3482b47D5C2005E");
    
    useEffect( () => {
        setTokenId(id);
    }, [id])

    useEffect( () => {
        getURI();
    })
    
    // const handleInput = (event) =>{
    //     setTokenId(event.target.value)
    // }
    
    function goToLeft() {
        var loc = parseInt(tokenId) - 1;
        window.location.href = "./" + loc;
    }

    function goToRight() {
        var loc = parseInt(tokenId) + 1;
        window.location.href = "./" + loc;
    }
    async function getURI(){

        if (tokenId >= parseInt(await contract.methods.tokenCounter().call())){
            alert("Token id does not exist ! Please input a valid token id");
            throw Error("Out of bounds");
        }
        else{
        let URI = await contract.methods.tokenURI(tokenId).call();
        const jsonURI = await fetch(URI).then(response => response.json())

        setAttribute(JSON.stringify(jsonURI.attributes))
        setImage(jsonURI.image)
        }   
    }

    return(
        <div className="fake_nefturian" >
            {/* <input type="number" value={tokenId} onChange={e=>handleInput(e)}/>
            <br/> */}
            {/* <button className="test" onClick={getURI}> Get token info</button> */}
            <br/>
            <div className="Info">{attribute}</div>
            <br/>
            

            {image !== "" &&
                <>
                    <IpfsImage hash={image}/>
                </>
            }

            <nav className="navigation">
                <button onClick={() => goToLeft()}>Gauche</button>
                <button onClick={() => goToRight()}>Droite</button>
            </nav>



            <nav className="back">
                <Link to ="/"> Go back to Main page</Link> 
            </nav>

        </div>
    )
}

export default FakeBaycTokenId1;
