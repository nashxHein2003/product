import { SafeAreaView, View, Text, Modal, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'
import React, {useState} from 'react'
import  { Feather } from '@expo/vector-icons'

const ModalCart = ({ isVisible, onClose, cartItems, updateCart }) => {

  const handleRemoveFromCart = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    updateCart(updatedCart);
  };
  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };
  return (
    <Modal transparent={true} visible={isVisible} animationType="slide">
      <SafeAreaView style={styles.modalContainer}>
          
          <FlatList
            data={cartItems} // Assuming cartItems is an array of items
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.cartView}>
                <Image source={{ uri: item.thumbnail }} style={styles.productImage} />

                <View style={styles.cartText}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.productPrice}>Price: $ {item.price}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                    
                    <TouchableOpacity style={styles.deleteBtn} onPress={() => handleRemoveFromCart(item.id)}>
                      <Text style={styles.deleteText}>Remove From Cart</Text>
                    </TouchableOpacity>

                  
                </View>

                
              </View>
            )}
          />
          <View style={styles.footer}>
            <View style={styles.totalView}>
              <Text style={styles.totalTxt}>Total Amount: $ {getTotalAmount()}</Text>
            </View>

            <View style={styles.footerBtnS}>
              <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>
                  Back
                </Text>
              </TouchableOpacity>
            </View>
          
          
          </View>
      </SafeAreaView>
    </Modal>
  );
}

export default ModalCart;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
    height: '100%',
    justifyContent: 'start',
    alignItems: 'center',
    paddingTop: 20
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
  cartView: {
    flexDirection: 'row',
    height: 'auto',
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    borderRadius: 20,
    boxShadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  cartText: {
    width: 250,
    alignItems: 'start',
    marginLeft: 10
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  deleteBtn: {
    padding: 10,
    backgroundColor: '#d11a2a',
    borderRadius: 10,
    marginTop: 20,
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 11
  },
  footer: {
    width: '100%',
    height: 150,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    zIndex: 100,
    boxShadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  totalView: {
    width: '100%',
    paddingVertical: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5
  },
  footerBtnS: {
    width: '100%',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'flex-end'
  },
  closeBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#3498db',
    marginRight: 20
  },
  totalTxt: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 20, 
  }

});
