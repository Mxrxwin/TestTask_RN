import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MessageSend from './messageSend'
import MessageGet from './messageGet'
import { Message } from '../../types/types'

const MessageChat = ({chat} : {chat : Message} ) => {
    const userMessage: Message = {
        message: "Hey!",
        time: "10:23",
        author: 'UserName'
    }

    const userMessage1: Message = {
        message: "Hey!Hey!Hey!Hey!Hey!Hey!Hey!Hey!Hey!Hey!Hey!Hey!Hey!Hey!Hey!Hey!Hey!Hey!Hey!Hey!Hey!Hey!Hey!Hey!Hey!",
        time: "10:23",
        author: 'UserName'
    }

    const userMessage2: Message = {
        message: "Hey!",
        time: "10:23",
        author: 'UserName'
    }
    
  return (
    <View style={styles.container}>
      <MessageSend message={userMessage}/>
      <MessageGet message={chat}/>
      <MessageSend message={userMessage1}/>
      <MessageGet message={userMessage2}/>
    </View>
  )
}

export default MessageChat

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginTop: 20
    }
})