import '../styles/items.css';


export default function BasketItem({name, counter , onclickDecrease}){
  
 return(
    <li>
      <p>{name} {counter}</p>  
      {/* <button onClick={() => {onclickDecrease(name)}}>-</button> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-dash-circle-fill button reduceButton" viewBox="0 0 16 16" onClick={() => {onclickDecrease(name)}}>
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"/>
        </svg>
    </li>
 );
}