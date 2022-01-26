import { useState } from "react"
import './OnAdd.css';

function OnAdd(cant) {

  const [stock, setStock] = useState(false);
  const buttonMore = () => {
      setStock(stock <3 ? stock+1 : stock)
  }
  const buttonLess = () => {
      setStock(stock > 0 ? stock-1 : stock)
  }

  const [qty, setQty] = useState(false)
  const ButtonAdd = () =>{
    setQty(!qty)
    console.log(qty)
  }

  return (
    <div className="cantidad">
        {qty ? <p>{stock}</p> : <p>0</p>}
        <div className="botones">
        <button onClick={buttonLess}type="button" className="btn">-</button>
        <p>{stock}</p>
        <button onClick={buttonMore} type="button" className="btn">+</button> 
        {qty ? <button onClick={ButtonAdd} type="button" >Quitar</button> : <button onClick={ButtonAdd} type="button" >Agregar</button>}
        </div>
    </div>
  );


}

export default OnAdd;