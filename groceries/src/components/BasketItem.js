

export default function BasketItem(props){
  console.log(props);
 return(
    <li>
      <p>{props.counter},{props.counter}</p>  
    </li>
 );
}