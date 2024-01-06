import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, {useEffect, useState} from 'react';

const ProductPage = () => {

  const [data, setData] = useState();

  const getAPIData = async () => {
    try {
      const res = await fetch(
        'https://dummyjson.com/products'
      );
      const json = await res.json();
      setData(json.products);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect (() => {getAPIData()},[]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
          data={data}
          numColumns={2}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
             <View style={styles.card}>
              <Image
              style={styles.cardImage}
                source={{ 
                  uri: item.thumbnail 
                }} 
              />

              <View style={styles.cardFooter}>

                <ScrollView style={{height: 100, flexDirection: 'column'}}>
                  <Text style={styles.cardTitle}>
                    {item.title}
                  </Text>
                  <Text style={styles.cardPrice}>
                    Price: $ {item.price}
                  </Text>
                  <Text style={styles.description}>
                    {item.description}
                  </Text>
                </ScrollView>

               
              </View>
              
            </View> 
          )}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor: 'white',
    flexBasis: '47%',
    marginHorizontal: 5,
  },
  cardImage: {
    flex: 1,
    minHeight: 150,
    maxHeight: 150,
    width: null,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  description: {
    fontSize: 11
  },
  cardPrice: {
    fontWeight: 'bold',
    fontSize: 13
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10
  }
});

export default ProductPage

