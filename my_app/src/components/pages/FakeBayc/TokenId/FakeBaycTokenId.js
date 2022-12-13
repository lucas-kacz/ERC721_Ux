import FakeBayc from "../FakeBayc";
import Web3 from "web3";
import { useState } from "react";
import { getTokenURI } from "../Web3Client";
import { IpfsImage } from "react-ipfs-image";


function FakeBaycTokenId() {

    const[tokenId, setTokenId] = useState("");
    const [URI, setURI] = useState("");
    const[attribute, setAttribute]= useState();
    const [image, setImage] = useState("");

    const handleInput = (event) =>{
        setTokenId(event.target.value)
    }

    const getURI = async (tokenId) =>{
        getTokenURI(tokenId).then(URI => {
          setURI(URI);
        }).catch(err =>{

          console.log(err);
        })
      };

    async function getImage(){
        const jsonURI = await fetch(URI).then(res => res.json()); 
        setAttribute(JSON.stringify(jsonURI.attributes));  
        setImage(jsonURI.image); 
        console.log(jsonURI); 
      };


    return(
        <div>
            <input type="number" value={tokenId} onChange={e=>handleInput(e)}/>
                <br/>
                    <button onClick={() => getURI(tokenId)}>Get URI</button>
                    <button onClick={getImage}>Get Token info</button>
                    <p>This token URI is {URI}</p>

                    <br/>
                    <div className="Info">{attribute}</div>
                    <br/>

                    {image !== "" &&
                        <>
                            <IpfsImage hash={image}/>
                        </>
                    }
        </div>
      );
}

export default FakeBaycTokenId;
 