import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet,
  Modal,
Button } from 'react-native'
import React, {useState} from 'react'
import TouchButton from './TouchButton'
import ModalBuy from './ModalBuy'
import ModalThank from './ModalThank'

const ModalFooter = ({getTotalAmount, onClose, }) => {

  const isBuyModalVisible = ''

  const [state, setState] =useState({
    isBuyModalVisible : false,
    isThankYouModalVisible: false
  })

  const handleBuyPress = () => {
    setState(prevState => ({
      ...prevState,
      isBuyModalVisible: true,
    }));
  };

  const handleConfirmBuy = () => {
    setState({
        isBuyModalVisible: false,
        isThankYouModalVisible: true
      });
  };

  const handleCancelBuy = () => {
    setState(prevState => ({
      ...prevState,
      isBuyModalVisible: false,
    }));
  };

  const handleThankYouOk = () => {
    setState(prevState => ({
      ...prevState,
      isThankYouModalVisible: false
    }));

  };


  return (
    <View style={styles.footer}>
      <View style={styles.totalView}>
        <Text style={styles.totalTxt}>Total Amount: $ {getTotalAmount()}</Text>
      </View>

      <View style={styles.footerBtnS}>
        <TouchButton 
          handlePress={handleBuyPress} 
          buttonStyle={styles.buyBtn} 
          buttonType='Buy'
          buttonTxtStyle={styles.buyBtnTxt} />
        
        <TouchButton 
          handlePress={onClose} 
          buttonStyle={styles.closeBtn} 
          buttonType='Back'
          buttonTxtStyle={styles.closeBtnTxt} />
      </View> 

      <ModalBuy
        isVisible={state.isBuyModalVisible}
        handleConfirmBuy={handleConfirmBuy}
        handleCancelBuy={handleCancelBuy} />

      <ModalThank 
        isVisible={state.isThankYouModalVisible}
        handleThankYouOk={handleThankYouOk} />
      
    </View>
  )
}

export default ModalFooter

const styles = StyleSheet.create({
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
  totalTxt: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 20, 
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
    backgroundColor: '#4BB543',
    marginRight: 20
  },
  closeBtnTxt: {
    fontSize: 14, 
    fontWeight: 'bold', 
    color: 'white'
  },
  buyBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderColor: '#4BB543',
    borderWidth: 2,
    backgroundColor: 'white',
    marginRight: 20
  },
  buyBtnTxt: {
    fontSize: 14, 
    fontWeight: 'bold', 
    color: '#4BB543'
  },

})