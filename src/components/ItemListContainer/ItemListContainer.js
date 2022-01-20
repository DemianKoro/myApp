import './ItemListContainer.css';
import ItemCount from './ItenCount/ItemCount';
import Products from './Products/Products';

const ItemListContainer = ({titleName}) => {
    return (
        <>
        <h3 className="nameItem">{titleName}</h3>
        <ItemCount cero="0"/>
        <div className='cardContainer' >
           <Products />
        </div>
        </>
    )
};

export default ItemListContainer;