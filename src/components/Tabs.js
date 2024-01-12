import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProductPage from '../screens/ProductPage'
import  { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Tabs = ({data, selectedCategory, setSelectedCategory, sections}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: '#3B3B3B',
        tabBarStyle: {
          backgroundColor: 'white'
        },
        headerTitleStyle: {
          fontSize: 25,
          color: 'black',
          
         
        },
      }}
      >
        <Tab.Screen 
        name={'Product'}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather 
                name={'droplet'}
                size={30} 
                color={focused? 'tomato' : '#3B3B3B'}
                />
            )
          }}>
            {() => <ProductPage data={data} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} sections={sections} /> }
          </Tab.Screen>
          
    </Tab.Navigator>
  )
}

export default Tabs