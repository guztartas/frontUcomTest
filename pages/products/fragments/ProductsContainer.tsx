import { useState, useEffect } from 'react';
import CartIcon from '../../../src/components/Icons/CartIcon'
import HeartIcon from '../../../src/components/Icons/HeartIcon'
import styles from '../../../styles/Products.module.css'

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

export default function ProductsContainer({products}: any) {
    const [productsAlreadyFavorited, setProductsAlreadyFavorited] = useState<string[] | any>();

    const handleFavoriteProduct = (id: number) => {
        let favoriteProducts: any = productsAlreadyFavorited?.split(',').map(Number); 

        if (!productsAlreadyFavorited?.includes(id)) { 
            favoriteProducts?.push(id) 
        } else {
            favoriteProducts = favoriteProducts.filter((item: number) => item !== id)
        }

        sessionStorage.setItem('Favorite Products', favoriteProducts);
        setProductsAlreadyFavorited(sessionStorage.getItem('Favorite Products'));
    } 
    
    useEffect(() => {
        setProductsAlreadyFavorited(sessionStorage.getItem('Favorite Products'));
    }, [products])
    
    if (products === null) {
        return <h2 className={styles.loading}>🌀 Loading products...</h2>;
    }

    return (
        <div className={styles.container}>
            {
                products?.map((product: productInterface)=>
                    <div className={styles.card} key={product.id}>
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
                                    <div onClick={() => handleFavoriteProduct(product.id)}>
                                        <HeartIcon favorite={productsAlreadyFavorited?.includes(product.id)} /> 
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