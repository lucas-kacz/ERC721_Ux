# ERC721_Ux

This project aims to build a simple UX in order to visualize and use ERC721 tokens.
The app is deployed on this [website](https://erc-721-ux-six.vercel.app/)

## Installation

If you want to run the project on your own machine follow these steps :
  - Clone the repo
  - cd to my_app by typing
  - `npm start`to run the project. A new tab should open in your web browser.
  
## How to use it ?

Once opened you should be greeted with this welcome page

![Home Page](https://user-images.githubusercontent.com/113424948/208079145-13ca24f5-d06b-417c-9a94-b40040a84ee3.JPG)

Then you need to connect to your Metamask on the Sepolia network. Otherwise the app won't work.
Once connected you can use the different pages on the navbar on top.

## Sections

### FakeBayc

The FakeBayc section allows you to mint your own FakeBayc ERC721 Token and see it directly on the app by typing the Id of the NFT below the mint button. If you just minted it, your token Id should be the total supply-1, once the transaction is validated. You can then navigate and see all the others minted NFTs

![FakeBayc Display](https://user-images.githubusercontent.com/113424948/208080409-47c473ed-4103-478d-bd8e-5659d49bece1.JPG)

### FakeNefturians

The FakeNetfurians sections allows you to mint an NFT and see all the NFTs a certain address has. Once minted, you can input your address and see the list you have.
![Fake Netfurians Token Address](https://user-images.githubusercontent.com/113424948/208170985-d66e26a4-7d03-410f-945a-0a6719b0243f.JPG)


### FakeMeebits
The FakeMeebits sections allows you to claim tokens that were not claimed yet. If you try to claim an already claimed token, the transaction will fail and cost much more than a non-claimed token.

