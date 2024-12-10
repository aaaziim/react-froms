import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Cousine = ({ name }) => {
    const asset = useContext(AssetContext)
    console.log(asset)
    return (
        <div>
            <h2>Cousine: {name}</h2>
            {name === "Abdullah" && <p>You got the {asset}</p>}

        </div>
    );
};

export default Cousine;