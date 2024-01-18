import { View, Text, Modal, Button, StyleSheet } from 'react-native'
import React from 'react'

const ModalThank = ({isVisible, handleThankYouOk}) => {
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
      >
        <View style={styles.thankYouModalContainer}>
          <View style={styles.thankYouModalContent}>
            <Text style={styles.thankYouTxt}>Thank you for your purchase!</Text>
            <Button 
              title="OK"
              onPress={handleThankYouOk} />
          </View>
        </View>
      </Modal>
  )
}

export default ModalThank

const styles = StyleSheet.create({
  thankYouModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  thankYouModalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  thankYouTxt: {
    fontSize: 20,
    marginBottom: 20,
  },
})