import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, SectionList } from 'react-native';

const ProductList = ({ sections }) => {
  // Render each product item
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <Text>${item.title}</Text>
      <Text>${item.price}</Text>
    </View>
  );

  // Render each section header
  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );

  return (
    <SectionList
      sections={sections}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnail: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  sectionHeader: {
    backgroundColor: '#f5f5f5',
    padding: 8,
  },
  sectionHeaderText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProductList;
