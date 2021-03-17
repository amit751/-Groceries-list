

export default function BasketItem({name, counter , onclickDecrease}){
  
 return(
    <li>
      <button onClick={() => {onclickDecrease(name)}}>-</button>
      <p>{name} {counter}</p>  
    </li>
 );
}