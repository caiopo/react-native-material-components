import React from 'react'
import { StyleSheet, View } from 'react-native'

export default class Divider extends React.PureComponent {
  render() {
    const { color, ...rest } = this.props

    return (
      <View style={[styles.outer, rest]}>
        <View
          style={[
            styles.inner,
            color !== undefined && { backgroundColor: color },
          ]}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  outer: {
    flexDirection: 'row',
  },

  inner: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
  },
})
