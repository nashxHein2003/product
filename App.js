import React, { useState, useEffect } from 'react';
import { 
  View, 
  SectionList, 
  Text, 
  Image, 
  FlatList, 
  StyleSheet, 
  SafeAreaView,
  TouchableOpacity} from 'react-native';

import { useProductData } from './src/hooks/useProductData';
import ProductPage from './src/screens/ProductPage';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';


const App = () => {
  const { data }= useProductData();
  const [selectedCategory, setSelectedCategory] = useState('All');

  if (!data) {
    return <Text>Loading...</Text>;
  }

  const filteredProducts = selectedCategory === 'All'
    ? data.products
    : data.products.filter(product => product.category === selectedCategory);

  const sections = [
    { title: 'Smartphones', data: filteredProducts.filter(product => product.category === 'smartphones') },
    { title: 'Laptops', data: filteredProducts.filter(product => product.category === 'laptops') },
    { title: 'Fragrances', data: filteredProducts.filter(product => product.category === 'fragrances') },
    { title: 'Skincare', data: filteredProducts.filter(product => product.category === 'skincare') },
    { title: 'Groceries', data: filteredProducts.filter(product => product.category === 'groceries') },
    { title: 'Home Decoration', data: filteredProducts.filter(product => product.category === 'home-decoration') },
  ];

  return (
    <SafeAreaView>
      <ProductPage data={data} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} sections={sections} />
    </SafeAreaView>

  );
};

export default App;


const styles = StyleSheet.create({
  
})
