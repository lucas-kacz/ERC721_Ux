import Web3 from 'web3';
import NFTContractBuild from "../../../ContractsAbi/FakeBayc.json";

let selectedAccount;
let nftContract;
let erc20Contract;
let isInitialized = false;
const tokenHolder = '0x77DbD1ddF6d9BfaB2aD5e76986A0628BB09B8Ae9';

export const init = async () =>{
    let provider = window.ethereum;

    if (typeof provider !== 'undefined'){
      //Metamask is installed

        provider
          .request({method: 'eth_requestAccounts'})
          .then(accounts => {
            selectedAccount = accounts[0];
            console.log(`Selected account is ${selectedAccount}`);
          })
          .catch(err => {
            console.log(err);
            return;
          });

          window.ethereum.on('accountsChanged', function (accounts) {
            selectedAccount = accounts[0];
            console.log(`Selected account changed to ${selectedAccount}`);
          });
      }

      const web3 = new Web3(provider);

      const networkId = await web3.eth.net.getId();
      console.log(networkId);

      nftContract = new web3.eth.Contract(
        NFTContractBuild.abi,
        '0x1dA89342716B14602664626CD3482b47D5C2005E'
      );

      isInitialized=true;
};


export const mintToken = async () => {
    if(!isInitialized) {
        await init();
    }

    nftContract.methods
        .claimAToken()
        .send({ from: selectedAccount });
};

export const numberOfTokens = async () => {
  if(!isInitialized) {
      await init();
  }

  return nftContract.methods.tokenCounter().call();
};  


export const name = async () => {
  if(!isInitialized) {
      await init();
  }

  return nftContract.methods.name().call();
};  

export const getTokenURI = async (tokenId) => {
  if(!isInitialized) {
      await init();
  }
  return nftContract.methods.tokenURI(tokenId).call();
};