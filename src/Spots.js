/**
 * @flow
 */

import * as React from 'react'
import ART from './ART'

import { makeCircle } from './shape'
import * as helper from './helper'
import * as typed from './typed'

type Props = typed.ShareProps

const Spots = ({ color, stroke, strokeWidth, ...props }: Props) => (
  <ART.Shape
    stroke={stroke || color}
    strokeWidth={strokeWidth}
    d={helper
      .sample(props.points, props.sampling)
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
