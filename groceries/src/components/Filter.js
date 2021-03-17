import React, {Component , useState} from 'react';
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



    
  const [inputStr, setInputStr] = useState('');
  
  const changeInputStr = (e) =>{
    setInputStr(e.target.value);
    }
    function getFilteredList(inputStr, products) {
    return products;
    }
    const filterdList = getFilteredList(inputStr, products);




   
    

    return(
      <div>
        <h1>Filter list</h1>
        <input onChange={changeInputStr}/>
        <GroceryList grocerylist={filterdList} />

      </div>
    );


}



     