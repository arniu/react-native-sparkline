/**
 * @flow
 */

import * as React from 'react'
import { ART } from 'react-native'
import { makeLine } from './shape'
import * as typed from './typed'

type Props = typed.ShareProps

const Fill = ({ points, height, margin, color, fill, opacity }: Props) => {
  const last = points[points.length - 1]
  const path = makeLine(points)
    .lineTo(last.x, height - margin)
    .lineTo(margin, height - margin)
    .close()

  return <ART.Shape fill={fill || color} opacity={opacity} d={path} />
}

export default Fill
