import React, { useState, useEffect } from 'react';
import {  
  Text, 
  StyleSheet, 
  SafeAreaView,
  View,
  ActivityIndicator
  } from 'react-native';

import { useProductData } from './src/hooks/useProductData';
import ProductPage from './src/screens/ProductPage';
import LoginScreen from './src/screens/LoginScreen';



const App = () => {
  const { data }= useProductData();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [state, setState] = useState({
    isLoggedIn: false
  })


  const handleLogin = () => {
    setState({ isLoggedIn: true });
  };

  if (!state.isLoggedIn) {
    return <LoginScreen handleLogin={handleLogin} />;
  }

  if (!data) {
    return (
      <View style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#3498db" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
    </View>
    );
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: '#3498db',
  },
  loadedContainer: {
    alignItems: 'center',
  },
  loadedText: {
    fontSize: 20,
    color: '#3498db',
  },
});
