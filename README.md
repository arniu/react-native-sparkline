# react-native-sparkline

[![npm](https://img.shields.io/npm/v/react-native-sparkline.svg)](https://www.npmjs.com/package/react-native-sparkline)
[![code style: standard](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

## Usage

* Install

```bash
npm i react-native-sparkline
```

* Link with react-native

```bash
react-native link react-native-sparkline
```

* Enjoy it

```jsx harmony
import React from 'react'
import Sparkline from 'react-native-sparkline'

const data = Array.from({ length: 20 }).map(
  (noValue, i) => i + (i + 1) * Math.random()
)

const App = () => (
  <Sparkline data={data}>
    <Sparkline.Line />
    <Sparkline.Fill />
    <Sparkline.Spots />
    <Sparkline.Band />
  </Sparkline>
)
```

## License

[MIT](./LICENSE)
