import react , {useState} from "react";
import GroceryItem from "./GroceryItem.js";
import BasketItem from "./BasketItem.js";
import BasketList from "./BasketList.js";

export default function GroceryList(props){
    
    const [basketList, setBasketList] = useState([
      {name: 'Strawberry', counter: 1},
      {name: 'Carrot', counter: 1},
      {name: 'Eggs', counter: 1},
      {name: 'Chicken', counter: 1},
      {name: 'Rice', counter: 1}
    ]);
    
    function onclickIncrease(name) {
      const index = basketList.findIndex((item) => item.name === name);
      if(index === -1) {
        basketList.push({name: name, counter: 1});
      } else {
        ++basketList[index].counter;
      }
      setBasketList( basketList.slice());
      console.log(basketList);
    }

    function onclickDecrease(name) {
      const index = basketList.findIndex((item) => item.name === name);
      if(basketList[index].counter === 1) {
        basketList[index.counter] = 0;
        basketList.splice(index, 1);
      } else {
        --basketList[index].counter;
      }
      setBasketList(basketList.slice());
    }
    
    const groceryList = props.grocerylist.map((item, index) => {
        return (
          <GroceryItem key={"#" + index} name={item} onclick={onclickIncrease}/>
      );
    });

    


    return(
       
      <>
        <ul>
          <BasketList basketList={basketList} onclickDecrease={onclickDecrease} />
        </ul>
        <ul>
          {groceryList}
        </ul>
      </>
    );
}