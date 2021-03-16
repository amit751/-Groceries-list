

export default function BasketItem(props){
  console.log(props);
 return(
    <li>
      <p>{props.name},{props.counter}</p>  
    </li>
 );
}