import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import React, {useState} from 'react'
import  { Feather } from '@expo/vector-icons'
import ModalCart from './ModalCart'

const CartButton = ({cartItemCount,selectedProduct, cartItems,setCartItems}) => {

  const [isModalVisible, setModalVisible] = useState(false);
  const updateCart = (newCartItems) => {
    setCartItems(newCartItems);
  };


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  }
  return (
    <View style={styles.cartBtn}>
      <TouchableOpacity style={styles.button} onPress={toggleModal}>
        <View style={styles.iconContainer}>
          <Feather name='shopping-cart' size={20} color='white' />
        </View>
        {cartItemCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{cartItemCount}</Text>
          </View>
        )}
        
      </TouchableOpacity>
      <ModalCart isVisible={isModalVisible} onClose={toggleModal} selectedProduct={selectedProduct} cartItemCount={cartItemCount} cartItems={cartItems} updateCart={updateCart} />
      </View>
  )
}

export default CartButton

const styles = StyleSheet.create({
  cartBtn: {
    position: 'absolute',
    bottom: 130,
    right: 30,
    zIndex: 5
  },
  button: {
    backgroundColor: '#3498db',
    padding: 25,
    borderRadius: 60,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  cartCount: {
    position: 'absolute',
    right: 10,
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'black',
    
  },
  iconText: {
    fontSize: 24,
  },
  badge: {
    backgroundColor: '#fcba03', // Customize badge background color
    borderRadius: 60,
    paddingHorizontal: 5,
    paddingVertical: 2,
    position: 'absolute',
    top: -9,
    right: 5,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  badgeText: {
    color: 'white', // Customize badge text color
    fontWeight: 'bold',
    fontSize: 12,
  },
})