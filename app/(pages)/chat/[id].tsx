import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import MessageLayout from '../../src/pages/messageLayout';

const Messanger = () => {
  const { id } = useLocalSearchParams();
  return (
    <MessageLayout id={id as string}/>
  )
}

export default Messanger
