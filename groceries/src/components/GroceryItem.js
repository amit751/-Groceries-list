import react , {useState} from "react";

export default function GroceryItem(props){
    return(
        <li>
            <button
             onClick={() => {
                props.updateBasketItem(props.name);
                }}
            >
            
             +
            </button>
            <p>{props.name}, {counter}</p>
        </li>
    );
            
}




