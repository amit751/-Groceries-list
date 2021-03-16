import react , {useState} from "react";
import GroceryItem from "./GroceryItem.js";
import BasketItem from "./BasketItem.js";


export default function GroceryList(props){
    
    const basketList=[];
    const [counter, setCounter] = useState(1);

    function updateBasketItem(name) {
        const findItem = basketList.find((item) => item.props.name === name);
        if (!findItem) {
            basketList.push(item)
        }
    const item = <BasketItem name={name} counter={counter} />
    basketList.push(item);
    console.log(basketList);

  }
   
    

    
    const groceryList = props.grocerylist.map((item, index) => {
     // const [itemconter, setInputStr] = useState('');
        return (
        
          <GroceryItem key={"#" + index} name={item} onClick={updateBasketItem}/>
      );
    });


    return(
       
      <>
        <ul>
          {basketList}
        </ul>
        <ul>
          {groceryList}
        </ul>
      </>
    );
}