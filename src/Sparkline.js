/**
 * @flow
 */

import * as React from 'react'
import { ART } from 'react-native'
import createScale from './scale'
import * as helper from './helper'
import * as typed from './typed'

type Props = typed.GraphProps

const defaultProps = {
  color: '#48d',
  strokeWidth: 1,
  opacity: 0.1,
  width: 240,
  height: 60,
  margin: 4
}

const makeContext = ({
  data,
  width,
  height,
  margin,
  max = helper.max(data),
  min = helper.min(data)
}: Props) => {
  // prettier-ignore
  const scaleX = createScale(
    [0, data.length - 1],
    [margin, width - margin]
  )

  // prettier-ignore
  const scaleY = createScale(
    [min, max],
    [height - margin, margin]
  )

  const points = data.map((d, i) => ({
    x: scaleX(i),
    y: scaleY(d)
  }))

  return {
    scaleX,
    scaleY,
    points,
    width,
    height,
    margin,
    data,
    max,
    min
  }
}

const Sparkline = (props: Props) => {
  const context = makeContext(props)

  return (
    // prettier-ignore
    <ART.Surface
      width={props.width}
      height={props.height}
      style={props.style}
    >
      {React.Children.map(props.children, child =>
        React.cloneElement(child, {
          ...helper.pickShape(props),
          ...helper.pickShape(child.props),
          ...context
        })
      )}
    </ART.Surface>
  )
}

Sparkline.defaultProps = defaultProps

export default Sparkline
