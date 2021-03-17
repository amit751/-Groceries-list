import react , {useState} from "react";

export default function GroceryItem({name, onclick}){
    
    return(
        <li>
            <button onClick={() => {onclick(name);}}> + </button>
            <p>{name} </p>
        </li>
    );
            
}




