import { 
  View, 
  Text, 
  SectionList, 
  Image, 
  TouchableOpacity, 
  StyleSheet} from 'react-native'
import React, {useState} from 'react'

const ProductSection = ({sections, addToCart}) => {

  return (
    <SectionList
        sections={sections}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
            <View style={styles.cardText}>
              <Text style={styles.price}>Price: $ {item.price}</Text>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() => addToCart(item)}>
                <Text style={styles.btnText}>Add To Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          

            <View style={{ padding: 10, backgroundColor: '#f5f5f5', marginBottom: 10}}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{title}</Text>
            </View>
         
        )}
      />
  )
}

export default ProductSection

const styles = StyleSheet.create({
  cardContainer: {
    minHeight: 200,
    flexDirection: 'row',
    marginBottom: 16,
    marginHorizontal: 15,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    boxShadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
   
  },
  thumbnail: {
    width: 120,
    height: 120,
    marginRight: 16,
    borderRadius: 4,
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

  cardText: {
    width: 230,
    alignItems: 'start'
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: '#fcba03',
    marginTop: 10,
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold'
  }
})