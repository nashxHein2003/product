import { View, Text, Modal, StyleSheet, Pressable } from 'react-native'
import React, {useState} from 'react'
import CartButton from './../components/CartButton';
import PickerCategory from './../components/PickerCategory';
import ProductSection from './../components/ProductSection';

const ProductPage = ({data, selectedCategory, setSelectedCategory, sections}) => {

  const [cartItems, setCartItems] = useState([])
  const cartItemCount = cartItems.length;

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product])
  }
  return (
    <View>
      <CartButton cartItemCount={cartItemCount} selectedProduct={selectedCategory} cartItems={cartItems} setCartItems={setCartItems} />
      <PickerCategory data={data} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <ProductSection sections={sections} addToCart={addToCart} cartItemCount={cartItemCount} /> 
      
    </View>
  )
}

export default ProductPage
