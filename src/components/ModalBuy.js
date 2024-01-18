import { View, Text, StyleSheet, Modal, Button } from 'react-native'
import React from 'react'

const ModalBuy = ({isVisible, handleCancelBuy, handleConfirmBuy}) => {
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
      >
        <View style={styles.buyModalContainer}>
          <View style={styles.buyModalContent}>
            <Text style={styles.txt}>Confirm your purchase?</Text>

            <View style={styles.btnContainer}>
              <Button title="Confirm" onPress={handleConfirmBuy} />
              <Button title="Cancel" onPress={handleCancelBuy} />
            </View>
            
          </View>
        </View>
      </Modal>
  )
}

export default ModalBuy

const styles = StyleSheet.create({
  buyModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buyModalContent: {
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  txt: {
    fontSize: 20
  },
  btnContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'center'
  },
})