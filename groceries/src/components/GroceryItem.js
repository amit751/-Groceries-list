import react , {useState} from "react";

export default function GroceryItem(props){
    const [counter, setCounter] = useState(0);
    
    return(
        <li>
            <button
             onClick={() => {
                props.updateBasketList(props.name, counter , setCounter)
                }}
            >
            
             +
            </button>
            <p>{props.name}, {counter}</p>
        </li>
    );
            
}




