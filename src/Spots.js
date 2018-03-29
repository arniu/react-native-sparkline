/**
 * @flow
 */

import * as React from 'react'
import { ART } from 'react-native'
import { makeCircle } from './shape'
import * as typed from './typed'

type Props = typed.ShareProps

const Spots = ({ points, color, stroke, strokeWidth }: Props) => (
  <ART.Shape
    stroke={stroke || color}
    strokeWidth={strokeWidth}
    d={points
      .map(({ x, y }) =>
        makeCircle({
          cx: x,
          cy: y,
          r: 2
        })
      )
      .join()}
  />
)

export default Spots
