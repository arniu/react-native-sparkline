/**
 * @flow
 */

export default function createScale (
  xs: [number, number],
  ys: [number, number]
): number => number {
  const [y0, y1] = ys

  const sameX = xs[0] === xs[1]
  const x0 = sameX ? xs[0] - 1 : xs[0]
  const x1 = sameX ? xs[1] + 1 : xs[1]

  const slope = (y1 - y0) / (x1 - x0)
  const intercept = y0 - slope * x0

  return function (x) {
    return slope * x + intercept
  }
}
