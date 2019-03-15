import * as React from 'react'
import { useAnimation } from 'react-native-animation-hooks'
import { Animated, StyleSheet, View } from 'react-native'
import { Colors } from '../utils/colors'

interface Props {
  value: boolean

  duration?: number

  fillColor?: string
  checkColor?: string
  borderColor?: string
}

export function Checkbox({
  value,
  duration = 100,
  fillColor = Colors.primaryBlue,
  checkColor = Colors.white,
  borderColor = Colors.darkGray,
}: Props) {
  const animation = useAnimation({
    type: 'timing',
    toValue: value ? 1 : 0,
    duration,
  })

  const colorSize = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 18],
  })

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.border,
          {
            borderColor,
          },
        ]}
      />

      <Animated.View
        style={[
          styles.fill,
          {
            backgroundColor: fillColor,

            height: colorSize,
            width: colorSize,
          },
        ]}>
        <Animated.Image
          style={[
            styles.check,
            {
              width: 16,
              height: 16,
              tintColor: checkColor,

              opacity: animation,
            },
          ]}
          source={CHECK_IMG}
        />
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  border: {
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 2,
    borderWidth: 2,
  },

  fill: {
    position: 'absolute',
    borderRadius: 2,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  check: {},
})

const CHECK_IMG = {
  uri:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAAiUlEQVR4AWMYUDAKRgEjgyN1jFnO8I8hkxrG/AdDK+oY00CJMczUMmbdIDKGhVrGbBkAY/yBylkpNyaa4S9Q6S4Mo1hJ9VQSMNH/xzCKFcjHMIawUf9hRpFnDAJkohjFjmoMuUbxMuynLMILoNrfU2QMwii4MRSBCrgxFIM6mDGUA2ci1Y2CUQAAbvFlc3LWttMAAAAASUVORK5CYII=',
}
