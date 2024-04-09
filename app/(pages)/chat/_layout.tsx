import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const ChatStack = () => {

  return (
    <Stack screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name='[id]'/>
        <Stack.Screen name='asked/[id]'/>
    </Stack>
  )
}

export default ChatStack