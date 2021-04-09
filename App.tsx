import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput } from 'react-native'
import { ResultsEntity } from './types/locations'
import { useLocationQuery } from './utils/useLocationQuery'
import { useTourQuery } from './utils/useTourQuery'

export default function App () {
  const [text, setText] = useState('')
  const { mutation, data } = useLocationQuery()
  const { mutation: tourMutation, data: tourData } = useTourQuery()

  const onChangeText = (text: string) => {
    setText(text)
    mutation(text)
  }

  const onPress = ({ geometry: { viewport } }: ResultsEntity) => {
    tourMutation({
      bottomLeft: [viewport.northeast.lat, viewport.northeast.lng],
      topRight: [viewport.southwest.lat, viewport.southwest.lng]
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        style={styles.input}
      />
      {data?.results?.map((item, idx) => (
        <Text key={idx} onPress={() => onPress(item)}>
          {item.address_components[0].short_name}
        </Text>
      ))}
      <StatusBar style='auto' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: '90%',
    borderRadius: 5
  }
})
