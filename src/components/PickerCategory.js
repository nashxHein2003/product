import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {Picker} from '@react-native-picker/picker';

const PickerCategory = ({selectedCategory, data, setSelectedCategory}) => {
  return (
    <Picker
      style={styles.picker}
        selectedValue={selectedCategory}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
      >
        <Picker.Item label="All" value="All" />
        {Array.from(new Set(data.products.map(product => product.category))).map(category => (
          <Picker.Item key={category} label={category} value={category} />
        ))}
    </Picker>
  )
}

export default PickerCategory

const styles = StyleSheet.create({
  picker: {
    height: 50,
    justifyContent: 'center',
    marginBottom: 15,
    overflow: 'hidden',
    
  },
})