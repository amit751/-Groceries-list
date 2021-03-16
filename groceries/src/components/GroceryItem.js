import react , {useState} from "react";
const products =[

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
]





function GrouceryItem(props){
    
    const [counter, setCounter] = useState(0);
    
    const increase = ()=> {
        setCounter(counter+1);
        console.log(counter);
        return(
            <BasketItem />
        )
    }
   
    return(
        <li>
            <span><button onClick = {increase} >+</button>{props.name}</span>
        </li>
    );
}



function BasketItem(props){
    
    return(
        <li>
            <span>{props.name}</span>
        </li>
    );
}




export default function GrouceryList(){
    const arrey = products.map((item,index)=>{
        return(<GrouceryItem key={index} name={item}/>);
    });
    
    return(
        <>
        <h1>GrouceryList</h1>
        <ul>
          {arrey}  
            
        </ul>
        </>
    );
}

