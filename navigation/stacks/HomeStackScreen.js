import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/Home'
import ListaScreen from '../screens/Lista'

const Stack = createStackNavigator()

const home = 'Home'
const lista = 'Lista'

const Start = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name={home} component={HomeScreen} />
        <Stack.Screen name={lista} component={ListaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Start