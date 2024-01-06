import React, { useState, useEffect } from 'react';
import { 
  View, 
  SectionList, 
  Text, 
  Image, 
  FlatList, 
  StyleSheet, 
  SafeAreaView} from 'react-native';

import {Picker} from '@react-native-picker/picker';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [data, setData] = useState(null);

  useEffect(() => {
 
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only once when the component mounts

  if (!data) {
    return <Text>Loading...</Text>;
  }

  const filteredProducts = selectedCategory === 'All'
    ? data.products
    : data.products.filter(product => product.category === selectedCategory);

  const sections = [
    { title: 'Smartphones', data: filteredProducts.filter(product => product.category === 'smartphones') },
    { title: 'Laptops', data: filteredProducts.filter(product => product.category === 'laptops') },
    { title: 'Fragrances', data: filteredProducts.filter(product => product.category === 'fragrances') },
    { title: 'Skincare', data: filteredProducts.filter(product => product.category === 'skincare') },
    { title: 'Groceries', data: filteredProducts.filter(product => product.category === 'groceries') },
    { title: 'Home Decoration', data: filteredProducts.filter(product => product.category === 'home-decoration') },
  ];

  return (
    <SafeAreaView>
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

      <SectionList
        sections={sections}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
            <View style={styles.cardText}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          

            <View style={{ padding: 10, backgroundColor: '#f5f5f5'}}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{title}</Text>
            </View>
         
        )}
      />
    </SafeAreaView>
  );
};

export default App;


const styles = StyleSheet.create({
  cardContainer: {
    height: 200,
    flexDirection: 'row',
    alignItems: 'start',
    marginBottom: 16,
    marginHorizontal: 15,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
   
  },
  thumbnail: {
    width: 100,
    height: 120,
    marginRight: 16,
    borderRadius: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
    width: 300
  },
  picker: {
    height: 200,
    
  },
  contentContainer: {

  },
  cardText: {

  }
})
