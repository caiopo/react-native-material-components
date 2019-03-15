# react-native-material-components

Implementation of some [Material Design Components][md].

- TypeScript support
- Pure JS
- Requires react-native >= 0.59

### Example

<img src=".github/example.gif" alt="example" width="300"/>

### Installation
```
yarn add react-native-material-components
```
or
```
npm install --save react-native-material-components
```

[md]: https://material.io/design/components/

### Usage

```jsx
import React, { useCallback, useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Switch } from 'react-native-material-components'

export default function App() {
  const [value, setValue] = useState(false)

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setValue(!value)}>

        <Switch value={value} />
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
})
```
