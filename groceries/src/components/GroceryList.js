import react , {useState} from "react";
import GroceryItem from "./GroceryItem.js";
import BasketItem from "./BasketItem.js";


export default function GroceryList(props){
    
  const basketList = [];

  function updateBasketList(name, counter,setCounter) {
    // const findItem = basketList.find((item) => item.name === name);
    // if (!findItem) {

    // }
    const item = <BasketItem name={name} counter={counter} />
    basketList.push(item);
    console.log(basketList);

  }
   
    

    
    const groceryList = props.grocerylist.map((item, index) => {
     // const [itemconter, setInputStr] = useState('');
        return (
        
          <GroceryItem key={"#" + index} name={item} onClick={updateBasketList}/>
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