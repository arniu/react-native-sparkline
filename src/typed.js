/**
 * @flow
 */

export type Point = {
  x: number,
  y: number
}

export type GraphProps = {
  data: number[],
  width?: number,
  height?: number,
  padding?: number,
  sampling?: number,
  limit?: number,
  max?: number,
  min?: number
}

export type GraphStyle = {
  color?: string,
  stroke?: string,
  strokeWidth?: number,
  opacity?: number,
  fill?: string
}

export type ShareProps = {
  scaleX: number => number,
  scaleY: number => number,
  points: Point[]
} & GraphProps
