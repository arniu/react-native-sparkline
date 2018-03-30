/**
 * @flow
 */

import * as React from 'react'
import { ART } from 'react-native'
import { makeRect } from './shape'
import * as helper from './helper'
import * as typed from './typed'

type Props = typed.ShareProps

const Band = ({
  data,
  scaleY,
  padding,
  width,
  color,
  fill,
  opacity
}: Props) => {
  const max = helper.max(data)
  const min = helper.min(data)
  const half = (max - min) / 2
  const high = max - half / 2

  return (
    <ART.Shape
      fill={fill || color}
      opacity={opacity}
      d={makeRect({
        x: padding,
        y: scaleY(high),
        width: width - 2 * padding,
        height: scaleY(half)
      })}
    />
  )
}

export default Band
