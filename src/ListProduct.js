import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, deleteProduct } from './API/ProductAPI';
const ListProduct = () => {

    const product = useSelector(state => state.products.products);
    console.log(product);

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const dispatch = useDispatch();
    return (
        <div>
            {
                product.map(item => (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <button className="btn btn-primary" type="submit" onClick={() => dispatch(deleteProduct(item.id))}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default ListProduct
