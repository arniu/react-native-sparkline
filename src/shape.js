/**
 * @flow
 */

import ART from './ART'

import * as typed from './typed'

type CircleProps = {
  cx: number,
  cy: number,
  r: number
}

/**
 * Make <circle> path
 *
 * @param {Object} props
 * @param {number} props.cx
 * @param {number} props.cy
 * @param {number} props.r
 * @return {string}
 */
export const makeCircle = (props: CircleProps) => `
  M${props.cx - props.r} ${props.cy}
  A${props.r} ${props.r} 0 0 0 ${props.cx + props.r} ${props.cy}
  A${props.r} ${props.r} 0 0 0 ${props.cx - props.r} ${props.cy}
  Z
`

type RectProps = {
  x: number,
  y: number,
  width: number,
  height: number,
  rx?: number,
  ry?: number
}

/**
 * Make <rect> path
 *
 * @param {Object} props
 * @param {number} props.x
 * @param {number} props.y
 * @param {number} props.width
 * @param {number} props.height
 * @param {number} [props.rx]
 * @param {number} [props.ry]
 * @return {string}
 */
export const makeRect = (props: RectProps) => `
  M${props.x} ${props.y}
  H${props.x + props.width}
  V${props.y + props.height}
  H${props.x}
  Z
`

export const makeLine = (points: typed.Point[]) =>
  points.reduce(
    // prettier-ignore
    (path, p, idx) => idx === 0
      ? path.moveTo(p.x, p.y)
      : path.lineTo(p.x, p.y),
    new ART.Path()
  )
