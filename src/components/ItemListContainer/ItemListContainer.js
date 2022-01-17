import './ItemListContainer.css';
import Products from './Products/Products';

const ItemListContainer = ({titleName}) => {
    return (
        <>
        <h3 className='nameItem'>{titleName}</h3>
        <div className="product" >
           <Products productName="Vestido" productPrice={"$17.800"}/>
        </div>
        </>
    )
};

export default ItemListContainer;