import { useNavigate } from "react-router-dom";
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const HomePage = () => {
  let navigate = useNavigate();

  const goToProducts = () => {
    // Solo si el user está logueado
    const logueado = false;
    if (logueado) {
      navigate("/products");
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <ItemListContainer />
      <button onClick={goToProducts}>Ir a la página de productos</button>
    </div>
  );
};

export default HomePage;
