import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Button } from 'react-native';

const productModal = ({ isVisible, closeModal, product }) => {
  const [isBuyModalVisible, setBuyModalVisible] = useState(false);
  const [isThankYouModalVisible, setThankYouModalVisible] = useState(false);

  const handleBuyPress = () => {
    setBuyModalVisible(true);
  };

  const handleConfirmBuy = () => {
    setBuyModalVisible(false);
    setThankYouModalVisible(true);
  };

  const handleCancelBuy = () => {
    setBuyModalVisible(false);
  };

  const handleThankYouOk = () => {
    setThankYouModalVisible(false);
    closeModal(); 
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.productContainer}>
          <Text>{product.name}</Text>
          <Text>{product.description}</Text>
          <Text>${product.price}</Text>
          <TouchableOpacity onPress={handleBuyPress} style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Buy</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Buy Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isBuyModalVisible}
        onRequestClose={() => setBuyModalVisible(false)}
      >
        <View style={styles.buyModalContainer}>
          <View style={styles.buyModalContent}>
            <Text>Confirm your purchase?</Text>
            <Button title="Confirm" onPress={handleConfirmBuy} />
            <Button title="Cancel" onPress={handleCancelBuy} />
          </View>
        </View>
      </Modal>

      {/* Thank You Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isThankYouModalVisible}
        onRequestClose={() => setThankYouModalVisible(false)}
      >
        <View style={styles.thankYouModalContainer}>
          <View style={styles.thankYouModalContent}>
            <Text>Thank you for your purchase!</Text>
            <Button title="OK" onPress={handleThankYouOk} />
          </View>
        </View>
      </Modal>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  buyButton: {
    marginTop: 10,
    backgroundColor: '#42f5e3',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buyButtonText: {
    color: 'white',
  },
  buyModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyModalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  thankYouModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thankYouModalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
});

export default productModal;
