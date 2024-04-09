import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TitleText = ({prop} : {prop: string})  => {
  return (
    <Text style={styles.style}>{prop}</Text>
  )
}

export default TitleText

const styles = StyleSheet.create({
    style: {
        margin: 20,
        fontSize: 18,
        fontWeight: '500'
    }
})