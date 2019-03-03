import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Switch from './switch'

export default function App() {
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
  })

  return (
    <View style={styles.container}>
      <Switch value={selected1} />

      <View style={styles.spacing} />

      <TouchableOpacity activeOpacity={1} onPress={toggle2}>
        <Switch
          value={selected2}
          activeThumbColor="#6200EE"
          activeTrackColor="#C39EF8"
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'papayawhip',
  },

  spacing: {
    height: 24,
  },
})
