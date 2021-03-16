import react , {useState} from "react";

export default function GroceryItem(props){
    return(
        <li>
            <button>+</button>
            <p>{props.name}</p>
        </li>
    );

}




