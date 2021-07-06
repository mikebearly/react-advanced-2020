import React, { useState, useEffect } from 'react';
import { useMike } from './2-useFetch';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products';

const Example = () => {
  const { loading, data } = useMike(url);
  /*
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await fetch(url)
    const products = await response.json()
    setProducts(products)
    setLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [url])
  */
  console.log(data);

  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  );
};

export default Example;
