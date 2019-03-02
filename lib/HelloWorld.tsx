import React, { useState } from 'react'
import { Text } from 'react-native'

interface Props {
  person: string
}

export default function HelloWorld(props: Props) {
  const greeted = props.person || 'World'

  const [counter, setCounter] = useState(0)

  return <Text>Hello, {greeted}!</Text>
}
