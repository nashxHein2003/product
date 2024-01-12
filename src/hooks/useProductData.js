import {useState, useEffect} from 'react'

export const useProductData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
 
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return { data };
}
