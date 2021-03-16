import react , {useState} from "react";

export default function GroceryItem(props){
    const [counter, setCounter] = useState(0);
    
    return(
        <li>
            <button
             onClick={() => {
                setCounter(counter + 1);
                props.updateBasketList(props.name, props.counter)
                }}
            >
            
             +
            </button>
            <p>{props.name}, {counter}</p>
        </li>
    );
            
}




