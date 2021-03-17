import React, {useState} from 'react';
import GroceryList from './GroceryList.js';
import '../styles/filter.css'


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
  const [groceryList, setGroceryList] = useState(products);
  
  const changeInputStr = async (e) =>{
    setInputStr(e.target.value);
    setGroceryList(getFilteredList(e.target.value, products));
  }
  
  function getFilteredList(inputStr, products) {
   return products.filter((item) => {
     return item.toLowerCase().search(inputStr.toLowerCase()) !== -1;
  });
  }

  return(
    <div>
      <div className={'header-container'}>
        <div className={'header-div'}>
          <h1 className={'title'}>Amit & Ben's SHOP</h1>
          <input className={'input-filter'} placeholder={'Look for an item :)'} onChange={changeInputStr}/>
        </div>
      </div>
      <GroceryList grocerylist={groceryList} />

    </div>
  );


}



     