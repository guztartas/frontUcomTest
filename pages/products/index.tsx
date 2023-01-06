import { useEffect, useState, Suspense } from 'react';
import ProductsContainer from './fragments/ProductsContainer'

export default function Products() {
    const [products, setProducts] = useState<[] | null>(null);

    const getProducts = async () => {
        const data = await fetch('http://localhost:3000/v1/api/products');
        const allData = await data.json();
        setProducts(allData);
    };

    useEffect(() => {
        getProducts();
    }, [products])

    return (
        <Suspense>
            <ProductsContainer products={products}/>
        </Suspense>
    );
}