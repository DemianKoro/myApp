import './ItemListContainer.css';
import ItemCount from './ItenCount/ItemCount';
import Products from './Products/Products';

const ItemListContainer = ({titleName}) => {
    return (
        <>
        <h3 className="nameItem">{titleName}</h3>
        <ItemCount />
        <div className='cardContainer' >
           <Products />
        </div>
        </>
    )
};

export default ItemListContainer;