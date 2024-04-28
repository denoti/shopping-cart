import '../styles/shop.css';
import Wrapper from './Wrapper';
import Navigation from './Navigation';
import { useEffect } from 'react';
import { useState } from 'react';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products when the components mounts
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      })
      .catch((error) => {
        console.error('Error fetching products: ', error);
      });
  }, []); // Empty dependency array to run only once on mount

  return (
    <div>
      <Navigation></Navigation>
      <div className='box'>
        <p>Items</p>
        <div className='display'>
          {products.map((product) => {
            return (
              <Wrapper
                key={product.id}
                img={product.image}
                price={product.price}
                title={product.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
