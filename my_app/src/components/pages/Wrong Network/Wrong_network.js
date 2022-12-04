import Card from "../Card/Card";
import classes from "./Wrong_network.module.css"

const WrongNetwork = (props) => {
    return ( 
        <Card className={classes.wrong_network}>
            <h2>Mauvais réseau</h2><br/>
            Connectez-vous sur Sepolia
        </Card>
    );
};

export default WrongNetwork;