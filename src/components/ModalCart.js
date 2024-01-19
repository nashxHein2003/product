import { 
  SafeAreaView, 
  View, 
  Text, 
  Modal, 
  StyleSheet, 
  TouchableOpacity, 
  FlatList, 
  Image } from 'react-native'
import React from 'react'
import ModalFooter from './ModalFooter';


const ModalCart = ({ 
  isVisible, 
  onClose, 
  cartItems, 
  updateCart }) => {

  const handleRemoveFromCart = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
      updateCart(updatedCart);
    };
    const getTotalAmount = () => {
      return cartItems.reduce((total, item) => total + item.price, 0);
    };

  return (
    <View>
      <Modal transparent={true} visible={isVisible} animationType="slide">
      <SafeAreaView style={styles.modalContainer}>
          
          <FlatList
            data={cartItems} 
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
          <ModalFooter getTotalAmount={getTotalAmount} onClose={onClose}  purchased />

      </SafeAreaView>

    </Modal>
    </View>
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
    fontWeight: 'bold'
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

});
