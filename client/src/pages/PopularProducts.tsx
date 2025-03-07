// React import
import { useEffect, useState } from 'react';
// Third part imports
import axios from 'axios';
// App imports
import { config } from '../config/config';
import { ProductCardInterface } from '../components/ProductsCard/types';
import ProductCard from '../components/ProductsCard/ProductCard'
import ErrorScreen from '../components/ErrorScreen/ErrorScreen';
import FilterButton from '../components/FilterButton/FilterButton';


const PopularProducts = () => {

  // To store products
  const [productsData, setProductsData] = useState<ProductCardInterface[]>([]);
  // To catch error
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.serverPath}/items`);
        setProductsData(response.data);
      } catch (err) {
        setError('Failed to fetch data');
      }
    };
    // Make API call to fetch products
    fetchData();
  }, []);

  // If connectivity issue , show error screen
  if (error) return <ErrorScreen error={error} />;
  return (
    <div>
      <div className='flex justify-center items-center'>
        <div className='w-[90%]'>
          <h2 className='text-4xl p-6 text-gray-800'>Trending Products</h2>
        </div>
        <div><FilterButton products={productsData} updateProduct={setProductsData} /></div>
      </div>
      <hr className='text-gray-200' />
      <div className='p-20 flex flex-wrap gap-20'>
        {
          productsData && productsData.map((product, index) => {
            return (
              <ProductCard key={index} id={product.id} name={product.name} price={product.price} img={product.img} />
            )
          })
        }
      </div>
    </div>
  )
}

export default PopularProducts
