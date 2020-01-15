/**
 * @flow
 */

import * as React from 'react'
import ART from './ART'

import { makeLine } from './shape'
import * as typed from './typed'

type Props = typed.ShareProps

const makeFill = ({ points, height, padding }: Props) => {
  const last = points[points.length - 1]
  return (
    last &&
    makeLine(points)
      .lineTo(last.x, height - padding)
      .lineTo(padding, height - padding)
      .close()
  )
}

const Fill = ({ color, fill, opacity, ...props }: Props) => (
  <ART.Shape fill={fill || color} opacity={opacity} d={makeFill(props)} />
)

export default Fill
