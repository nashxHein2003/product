import { 
  Text,
  TouchableOpacity } from 'react-native'
import React from 'react'

const TouchButton = ({handlePress, buttonStyle, buttonType, buttonTxtStyle}) => {
  return (
    <TouchableOpacity onPress={handlePress} style={buttonStyle}>
      <Text style={buttonTxtStyle}>{buttonType}</Text>
    </TouchableOpacity>
  )
}

export default TouchButton

