import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import HomeScreen from './src/screens/HomeScreen'

const App = () => {
  return (
    <View style={styles.conatiner}>
     <HomeScreen/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
conatiner:{
  flex:1
}
})

