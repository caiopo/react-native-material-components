import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Switch } from '../switch'

export default function SwitchExample() {
  const [selected1, setSelected1] = useState(false)
  const [selected2, setSelected2] = useState(true)

  useEffect(() => {
    const id = setInterval(() => {
      setSelected1((s) => !s)
    }, 1000)

    return () => clearInterval(id)
  }, [])

  const toggle2 = useCallback(() => {
    setSelected2((s) => !s)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Switch</Text>

      <Switch value={selected1} />

      <View style={{ height: 24 }} />

      <TouchableOpacity activeOpacity={1} onPress={toggle2}>
        <Switch value={!selected2} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  subtitle: {
    fontSize: 16,
    color: '#333333',
    marginTop: 16,
    marginBottom: 8,
  },
})
