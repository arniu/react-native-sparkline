import React from 'react'
import { StyleSheet, View } from 'react-native'
import Sparkline from 'react-native-sparkline'

const data = Array.from({ length: 20 }).map(
  (noValue, i) => i + (i + 1) * Math.random()
)

export default () => (
  <View style={styles.container}>
    <Sparkline style={styles.sparkline} data={data}>
      <Sparkline.Line />
      <Sparkline.Fill />
      <Sparkline.Spots color='red' />
    </Sparkline>

    <Sparkline style={styles.sparkline} data={data}>
      <Sparkline.Line />
      <Sparkline.Fill />
    </Sparkline>

    <Sparkline style={styles.sparkline} data={data}>
      <Sparkline.Line />
      <Sparkline.Band />
    </Sparkline>

    <Sparkline style={styles.sparkline} data={data}>
      <Sparkline.Line />
      <Sparkline.Band />
      <Sparkline.Guide color='red' />
    </Sparkline>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  sparkline: {
    margin: 10
  }
})
