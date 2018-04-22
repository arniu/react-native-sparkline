import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Sparkline from 'react-native-sparkline'

const data = Array.from({ length: 20 }).map(
  (unused, i) => i + (i + 1) * Math.random()
)

const props = {
  data,
  style: {
    margin: 10
  }
}

export default () => (
  <View style={styles.container}>
    <Sparkline {...props}>
      <Sparkline.Line />
    </Sparkline>

    <Text>Line</Text>

    <Sparkline {...props}>
      <Sparkline.Fill />
    </Sparkline>

    <Text>Fill</Text>

    <Sparkline {...props}>
      <Sparkline.Line />
      <Sparkline.Fill />
    </Sparkline>

    <Text>Line + Fill</Text>

    <Sparkline {...props}>
      <Sparkline.Line />
      <Sparkline.Fill />
      <Sparkline.Spots color='red' />
    </Sparkline>

    <Text>with Spots</Text>

    <Sparkline {...props}>
      <Sparkline.Line />
      <Sparkline.Band />
    </Sparkline>

    <Text>Line + Band</Text>

    <Sparkline {...props}>
      <Sparkline.Line />
      <Sparkline.Band />
      <Sparkline.Guide where='max' />
      <Sparkline.Guide where='min' />
    </Sparkline>

    <Text>with Guide</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
