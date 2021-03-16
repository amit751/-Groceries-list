import react , {useState} from "react";
import GroceryItem from "./GroceryItem.js";


export default function GroceryList(props){

    const groceryList = props.grocerylist.map((item, index) => {
      return (
          <GroceryItem key={"#" + index} name={item} />
      );
    });


    return(
        <ul>
          {groceryList}
        </ul>
    );
}