// import { useNavigate } from "react-router-dom";
import ItemContainer from '../components/ItemContainer/ItemContainer';

const HomePage = () => {
  
  // let navigate = useNavigate();

  // const goToProducts = () => {
  //   // Solo si el user está logueado
  //   const logueado = true;
  //   if (logueado) {
  //     navigate("/myApp/products");
  //   } else {
  //     navigate("/");
  //   }
  // };

  
           

  return (
    <div>
      <ItemContainer />
      {/* <button onClick={goToProducts}>Ir a la página de productos</button> */}
    </div>
  );
};

export default HomePage;
