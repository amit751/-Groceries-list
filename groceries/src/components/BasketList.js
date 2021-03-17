import BasketItem from "./BasketItem";

export default function BasketList({basketList, onclickDecrease}){
    
    return (
      basketList.map((item, index) => {
          return(
              <BasketItem name={item.name} counter={item.counter} onclickDecrease={onclickDecrease} key={"#" + index}/>
          );
      })
    );
}