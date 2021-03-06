# react-native-sparkline

[![npm](https://img.shields.io/npm/v/react-native-sparkline.svg)](https://www.npmjs.com/package/react-native-sparkline)
[![code style: standard](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

An ART-based sparkline component for react-native

![example screenshot](/example/screenshot.png)

## Prerequisite

This library is based on [ART][art-library] and works on both Android and iOS platform.

## Linking module

For `react-native >= 0.60` ReactNativeART should be auto-linked and no additional action is required.

For `react-native < 0.60` you need to link ReactNative ART:

```
react-native link @react-native-community/art
```

Manual:
[manual-linking]: https://facebook.github.io/react-native/docs/linking-libraries-ios.html#manual-linking

## Usage

- Install

```bash
npm i react-native-sparkline
```

- Use it

```jsx harmony
import React from 'react'
import Sparkline from 'react-native-sparkline'

const data = Array.from({ length: 20 }).map(
  (unused, i) => i + (i + 1) * Math.random()
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

## Example

1.  `cd example`
2.  `npm install`
3.  `react-native run-ios` or `react-native run-android`

## License

[MIT](./LICENSE)
