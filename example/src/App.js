import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SwitchExample from './SwitchExample'
import Divider from './utils/Divider'
import CheckboxExample from './CheckboxExample'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Components Example</Text>

      <Divider/>

      <SwitchExample/>

      <View style={{ height: 24 }}/>

      <CheckboxExample/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 24,
  },

  title: {
    fontSize: 26,
    color: '#333333',
    marginBottom: 8,
  },

  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#aaaaaaaa',
  },
})
