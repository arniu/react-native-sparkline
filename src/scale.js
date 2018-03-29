/**
 * @flow
 */

export default function createScale (
  xs: [number, number],
  ys: [number, number]
): number => number {
  const [x0, x1] = xs
  const [y0, y1] = ys

  const slope = (y1 - y0) / (x1 - x0)
  const intercept = y0 - slope * x0

  return function (x) {
    return slope * x + intercept
  }
}
