/**
 * @flow
 */

import * as React from 'react'
import { ART } from 'react-native'
import createScale from './scale'
import * as helper from './helper'
import * as typed from './typed'

type Props = typed.GraphProps

const createHelpers = ({
  data,
  width,
  height,
  padding,
  max = helper.max(data),
  min = helper.min(data)
}: Props) => {
  // prettier-ignore
  const scaleX = createScale(
    [0, data.length - 1],
    [padding, width - padding]
  )

  // prettier-ignore
  const scaleY = createScale(
    [min, max],
    [height - padding, padding]
  )

  const points = data.map((d, i) => ({
    x: scaleX(i),
    y: scaleY(d)
  }))

  return {
    scaleX,
    scaleY,
    points
  }
}

const Sparkline = ({ children, ...props }: Props) => {
  const helpers = createHelpers(props)

  return (
    // prettier-ignore
    <ART.Surface
      width={props.width}
      height={props.height}
      style={props.style}
    >
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          ...props,
          ...child.props,
          ...helpers
        })
      )}
    </ART.Surface>
  )
}

Sparkline.defaultProps = {
  color: '#48d',
  strokeWidth: 1,
  opacity: 0.1,
  width: 240,
  height: 60,
  padding: 4,
  sampling: 8
}

export default Sparkline
