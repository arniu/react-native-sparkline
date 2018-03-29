/**
 * @flow
 */

/**
 * Max
 *
 * @param {Array.<number>} xs
 * @return {number}
 */
export function max (xs: number[]): number {
  return Math.max.apply(undefined, xs)
}

/**
 * Min
 *
 * @param {Array.<number>} xs
 * @return {number}
 */
export function min (xs: number[]): number {
  return Math.min.apply(undefined, xs)
}

const nonEmpty = (xs: number[]) => xs && xs.length > 0

/**
 * Average
 *
 * @param {Array.<number>} xs
 * @return {number}
 */
export function mean (xs: number[]): number {
  return nonEmpty(xs) ? xs.reduce((a, b) => a + b) / xs.length : 0
}

/**
 * Median
 *
 * @param {Array.<number>} xs
 * @return {number}
 */
export function median (xs: number[]): number {
  return nonEmpty(xs) ? xs.sort()[Math.floor(xs.length / 2)] : 0
}

const devSum = xs => {
  const avg = mean(xs)
  return xs.reduce((acc, x) => {
    return acc + Math.pow(x - avg, 2)
  })
}

/**
 * Standard Deviation
 *
 * @param {Array.<number>} xs
 * @return {number}
 */
export function stdev (xs: number[]): number {
  return nonEmpty(xs) ? Math.sqrt(devSum(xs) / (xs.length - 1)) : 0
}

// https://github.com/react-native-china/react-native-ART-doc/blob/master/doc.md#shape
const shapePropNames = [
  'color', // fallback color
  'width', // maybe we should drop it
  'height', // maybe we should drop it
  'stroke',
  'strokeWidth',
  'strokeDash',
  'strokeCap',
  'strokeJoin',
  'opacity',
  'fill'
]

/**
 * Pick shape style
 *
 * @param {{[string]:any}} props
 * @return {{[string]:any}}
 */
export function pickShape (props: Object): Object {
  return shapePropNames.reduce((obj, key) => {
    if (key in props) {
      obj[key] = props[key]
    }

    return obj
  }, {})
}
