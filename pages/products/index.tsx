import { useCallback, useEffect, useState } from 'react';
import styles from '../../styles/Products.module.css'

export default function Products() {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const data = await fetch('http://localhost:3000/v1/api/products');
        const allData = await data.json();
        setProducts(allData);
    };

    useEffect(() => {
        getProducts();
    }, [products])

    return (
        <div className={styles.container}>
            {
                products.map((value)=>
                    <>
                        <div className={styles.product}>
                            <p>{value.id}</p>
                            <p> {value.title}</p>
                            <p> {value.description}</p>
                            <p>{value.price}</p>
                            <p>{value.discountPercentage}</p>
                            <p>{value.rating}</p>
                            <p>{value.stock}</p>
                            <p>{value.brand}</p>
                            <p>{value.category}</p>
                            <p>{value.thumbnail}</p>
                            <p>{value.images}</p>
                        </div>
                    </>
                )
            }
        </div>
    );
}