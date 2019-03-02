import * as React from 'react'
import { Text } from 'react-native'

interface Props {
  person: string
}

export function HelloWorld({ person }: Props) {
  const greeted = person || 'World'

  return <Text>Hello, {greeted}!</Text>
}
