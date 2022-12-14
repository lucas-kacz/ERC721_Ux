import { use } from "chai";
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Web3 from "web3";
import fakeNefturians from "../../../../ContractsAbi/FakeNefturians.json";

let web3 = new Web3(window.ethereum);
var contract = new web3.eth.Contract(fakeNefturians.abi, "0x9bAADf70BD9369F54901CF3Ee1b3c63b60F4F0ED");

function FakeNefturiansUserAddress(){

    const[balance, setBalance] = useState();
    const[currentAddress, setCurrentAddress] = useState();
    const[list, setList] = useState([]);
    const {address} = useParams();

    useEffect( () => {
        setCurrentAddress(address);
    }, [address])

    useEffect( () => {
        getTokens();
    }, [])

    async function getTokens(){
        let value = await contract.methods.balanceOf(address).call();
        setBalance(value);

        for (let i = 0; i < balance; i++){
            let tokenId = await contract.methods.tokenOfOwnerByIndex(address, i).call();
            let URI = await contract.methods.tokenURI(tokenId).call();

            let tokenURIJson = await fetch(URI).then(response => response.json());

            list.push(tokenURIJson);
            console.log(list);
        }

        const DisplayData = list.map(
            (token) => {
                return (
                    <tr>
                        <td>{token.name}</td>
                        <td>{token.description}</td>
                    </tr>
                )
            }
        )

        setList(DisplayData);
    }

    return(
        <div className="fake_nefturian">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </table>
            <button onClick={getTokens}>Get tokens of this address</button>
        </div>
    )
}

export default FakeNefturiansUserAddress;