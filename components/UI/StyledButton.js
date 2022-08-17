import React from 'react'
import { Pressable, Text } from 'react-native'

function StyledButton(props) {
  return (
    <Pressable onPress={props.onPress} style={props.style} className={"w-8 h-8 flex items-center justify-center text-center text-lg bg-gray-400 border-sky-800 border " + props.style}>
      <Text>{props.title}</Text>
    </Pressable>
  )
}

export default StyledButton;