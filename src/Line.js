/**
 * @flow
 */

import * as React from 'react'
import ART from './ART'

import { makeLine } from './shape'
import * as typed from './typed'

type Props = typed.ShareProps

const Line = ({ points, color, stroke, strokeWidth }: Props) => (
  <ART.Shape
    stroke={stroke || color}
    strokeWidth={strokeWidth}
    d={makeLine(points)}
  />
)

export default Line
