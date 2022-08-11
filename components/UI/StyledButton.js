import React from 'react'
import { Pressable, Text } from 'react-native'

function StyledButton(props) {
  return (
    <Pressable onPress={props.onPress} style={props.style}>
      <Text style={props.style}>{props.title}</Text>
    </Pressable>
  )
}

export default StyledButton;