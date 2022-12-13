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

// import { useState } from "react";
// import { IpfsImage } from 'react-ipfs-image';
// import Web3 from "web3";

// function FakeBaycTokenInfo() {
    
//     //state zone 
//     const[tokenId, setTokenId] = useState(); 
//     const[attribute, setAttribute]= useState(); 
//     const [image, setImage] = useState(""); 

//     //contract zone 
//     const contract_abi = require("../../../../ContractsAbi/FakeBayc.json").abi; 
//     const contract_address = "0x1dA89342716B14602664626CD3482b47D5C2005E"; 
//     let web3 = new Web3(window.ethereum);
//     var contract = new web3.eth.Contract(contract_abi, contract_address);

//     const handleChamp = (event)=>{
//         setTokenId(event.target.value)
//     }

//     async function GetTokenInfo(){
       

//         if(tokenId >= parseInt(await contract.methods.tokenCounter().call())){
//             alert("This token has not been minted"); 
//             throw Error("token out of bound")
//         }else{
//         let info= await contract.methods.tokenURI(tokenId).call();
//         console.log(info)
//         const jsonURI = await fetch(info).then(res => res.json()); 

//         setAttribute(JSON.stringify(jsonURI.attributes));  
//         setImage(jsonURI.image); 
//         console.log(jsonURI); 

        
//     }
// } 
    
//     return (
//         <div>
//             <input type="number"value={tokenId} onChange={e=>handleChamp(e)}/>
//                 <br></br>
//                     <button onClick={GetTokenInfo}> Get token info</button>
//                     <br></br>
//                     <div className="Info">{attribute}</div>
//                 <br></br>
//                 {image!=="" &&
//                 <>
//                     <IpfsImage hash={image}/>
//                 </>
//             }
//             <div></div>

//         </div>                    
//     )
// }

// export default FakeBaycTokenInfo; 