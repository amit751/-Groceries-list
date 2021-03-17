import React, {useState} from 'react';
import GroceryList from './GroceryList.js';


export default function Filter(){

  const products = [
    "Strawberry",
     "Blueberry",
     "Orange",
     "Banana",
     "Apple",
     "Carrot",
     "Celery",
     "Mushroom",
     "Green Pepper",
     "Eggs",
     "Cheese",
     "Butter",
     "Chicken",
     "Beef",
     "Pork",
     "Fish",
     "Rice",
     "Pasta",
     "Bread",
    ];


//["D F D F" , "dsfgdsf" , "gdfgfg"]
///"t y y"

  const [inputStr, setInputStr] = useState('');
  const [groceryList, setGroceryList] = useState(products);
  
  const changeInputStr = async (e) =>{
    setInputStr(e.target.value);
    setGroceryList(getFilteredList(e.target.value, products));
    
  }
  
  function getFilteredList(inputStr, products) {
    console.log("im here");
   return products.filter((item) => {
     return item.toLowerCase().search(inputStr.toLowerCase()) !== -1;
  });
  }

    //I suspect that the problem lies in the fact that you are calling your state setter immediately inside the function component body, which forces React to re-invoke your function again, with the same props, which ends up calling the state setter again, which triggers React to call your function again.... and so on.
    ///[" y y g r f" , "r t"]
    //"g r"
 

  return(
    <div>
      <h1>Filter list</h1>
      <input onChange={changeInputStr}/>
      <GroceryList grocerylist={groceryList} />

    </div>
  );


}



     