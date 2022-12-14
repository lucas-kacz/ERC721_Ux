import Card from "../Card/Card";
import classes from "./ChainInfo.module.css";

const ChainInfo = (props) => {
    return ( 
        <Card className={classes.chaininfo}>
            <h1>Welcome, here are some infos</h1>
            <p>You are connected with : {props.currentAccount}</p>
            <p> Chain Id : {props.chainId}</p>
            <p>Last block number : {props.lastBlockNumber}</p>
        </Card>
    );
};

export default ChainInfo;