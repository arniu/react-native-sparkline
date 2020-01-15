/**
 * @flow
 */

import * as React from 'react'
import ART from './ART'

import * as helper from './helper'
import * as typed from './typed'

type Props = typed.ShareProps & {
  where: number | 'max' | 'min' | 'mean' | 'median' | 'stdev'
}

const makeGuide = ({ data, where, scaleY, padding, width }: Props) => {
  const level = typeof where !== 'number' ? helper[where](data) : where
  return `M${padding} ${scaleY(level)} H${width - padding}`
}

const Guide = ({ color, stroke, strokeWidth, ...props }: Props) => (
  <ART.Shape
    stroke={stroke || color}
    strokeWidth={strokeWidth}
    d={makeGuide(props)}
  />
)

Guide.defaultProps = {
  where: 'mean'
}

export default Guide
