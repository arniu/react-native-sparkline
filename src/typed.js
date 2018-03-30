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
  min?: number,

  color?: string,
  stroke?: string,
  strokeWidth?: number,
  opacity?: number,
  fill?: string
}

export type DrawHelpers = {
  scaleX: number => number,
  scaleY: number => number,
  points: Point[]
}

export type ShareProps = GraphProps & DrawHelpers
