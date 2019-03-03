import * as React from 'react'
import { useAnimation } from 'react-native-animation-hooks'
import { Animated, Platform, StyleSheet, View } from 'react-native'

interface Props {
  value: boolean

  duration?: number

  activeThumbColor?: string
  inactiveThumbColor?: string

  activeTrackColor?: string
  inactiveTrackColor?: string
}

export default function Switch({
  value,
  duration = 200,

  activeThumbColor = '#0084D9',
  activeTrackColor = '#9ACDED',

  inactiveThumbColor = '#FFFFFF',
  inactiveTrackColor = '#C6C6C6',
}: Props) {
  const animation = useAnimation({
    type: 'timing',
    toValue: value ? 1 : 0,
    duration,
  })

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.background,
          {
            backgroundColor: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [inactiveTrackColor, activeTrackColor],
            }),
          },
        ]}
      />

      <Animated.View
        style={[
          styles.foreground,
          {
            left: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 20],
            }),

            backgroundColor: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [inactiveThumbColor, activeThumbColor],
            }),
          },
        ]}
        {...elevation}
      />
    </View>
  )
}

const shadow =
  Platform.OS === 'ios'
    ? {
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 4 },
      }
    : {}

const elevation = Platform.OS === 'android' ? { elevation: 2 } : {}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  background: {
    width: 34,
    height: 14,
    borderRadius: 7,
    backgroundColor: 'cyan',
  },

  foreground: {
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    ...shadow,
  },
})
