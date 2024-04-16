import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';

import { useCart } from '../../context/CartContext'




const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [products, setProducts] = useState([]);


    //   const {addToCart}= useCart();

    //   const addProduct = () =>{
    //     // setItem[...setItems]
    //   }


    const fetchproduct = (addProduct) => {
        console.log('products', addProduct)
        fetch('https://fakestoreapi.com/products', {
            method: "POST",
            body: JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res => res.json())
            .then(json => console.log(json))
    }
    // setAddProduct();


    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then((response) => response.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error('Error fetching categories:', error));
    }, []);

    const fetchProductsByCategory = (category) => {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching products:', error));
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        fetchProductsByCategory(category); ``
    };
    const handleAddToCart = (product) => {
        addToCart(product); // Call addToCart from CartContext
        console.log(product)
    };


    return (<>
        <Navbar />
        <div className="categories-container">
            <div className='category-image'>
                <img width={100} src='/img/electronics.jpg'></img>
                <div class="vl" style={{ border: "2px solid whitesmoke", height: "50px" }}></div>

                <img width={100} src='/img/jewellery.jpg'></img>
                <div class="vl" style={{ border: "2px solid whitesmoke", height: "50px" }}></div>

                <img width={100} height={66} src='/img/men.jpg'></img>
                <div class="vl" style={{ border: "2px solid whitesmoke", height: "50px" }}></div>

                <img width={100} src='/img/womens.jpg'></img>
                <div class="vl" style={{ border: "2px solid whitesmoke", height: "50px" }}></div>

            </div>
            <div className="category-list">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={selectedCategory === category ? 'active' : ''}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </button>

                ))}
            </div>



            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.title} className="product-image" />
                        <div className="product-details">
                            <h3 className="product-title">{product.title}</h3>
                            <p className="product-price">${product.price}</p>
                            <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
    );
};

export default Categories;
