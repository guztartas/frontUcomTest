import { useEffect, useState } from 'react';
import { arrayBuffer } from 'stream/consumers';
import CartIcon from '../../src/components/Icons/CartIcon'
import HeartIcon from '../../src/components/Icons/HeartIcon'
import styles from '../../styles/Products.module.css'

interface productInterface {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
  }

export default function Products() {
    const [products, setProducts] = useState([]);
    let favoriteProducts: any = [];

    const getProducts = async () => {
        const data = await fetch('http://localhost:3000/v1/api/products');
        const allData = await data.json();
        setProducts(allData);
    };

    const handleFavoriteProduct = (id: number) => {
        console.log(favoriteProducts.includes(id))
        // favoriteProducts = sessionStorage.getItem('Favorite Products');
        if (!favoriteProducts.includes(id)) { 
            favoriteProducts.push(id) 
        }
        else {
            favoriteProducts = favoriteProducts.filter(function(product: number) {
                return product !== id;
            })
        }
        sessionStorage.setItem('Favorite Products', favoriteProducts);
    } 

    useEffect(() => {
        getProducts();
    }, [products])

    return (
        <div className={styles.container}>
            {
                products.map((product: productInterface)=>
                    <div className={styles.card}>
                        <div className={styles.wrapper}>
                            {product.discountPercentage && 
                                <div className={styles.discountPercentage}>
                                    <span>
                                        {Math.round(product.discountPercentage)}% OFF
                                    </span>
                                </div>
                            }
                            <img className={styles.cardImg} src={product.images[0]} alt="Paris"/>
                            <div className={styles.cardInfo}>
                                <div className={styles.reviewRating}>
                                    <div className={styles.ratings}>
                                        <div className={styles.emptyStars}></div>
                                        <div className={styles.fullStars} style={{ width: product.rating * 20 + '%' }}></div>
                                    </div>
                                </div>
                                <h1>{product.title}</h1>
                                <p className={styles.description}>{product.description}</p>
                                <div className={styles.action}>
                                    <div className={styles.priceGroup}>
                                        <p className={styles.old_price}>R$ {product.price}</p>
                                        <p className={styles.newPrice}>R$ {Math.round(product.price - ((product.price * product.discountPercentage) / 100))}</p>
                                    </div>
                                    <div onClick={() => handleFavoriteProduct(product.id)} key={favoriteProducts}>
                                        <HeartIcon checked={favoriteProducts.includes(product.id)} /> 
                                    </div>
                                    <CartIcon />
                                </div>
                            </div>
                        </div>
                    </div>         
                )
            }
        </div>
    );
}