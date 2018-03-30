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

/**
 * Sample Data
 *
 * @param {Array.<number>} xs
 * @param {number} sampling
 * @return {number}
 */
export function sample<T> (xs: T[], sampling: number): T[] {
  const band = (sampling > 1 ? xs.length : 1) / sampling
  const step = Math.round(Math.min(band, xs.length / 2))

  let cursor = -1
  return xs.filter((x, i) => {
    if (i > cursor) {
      cursor += step
    }

    return i === cursor
  })
}

const acceptedProps = [
  'sampling', // sampling rate
  'height', // maybe we should drop it
  'width', // maybe we should drop it
  'color', // fallback color
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
export function filterProps (props: Object): Object {
  return acceptedProps.reduce((obj, key) => {
    if (key in props) {
      obj[key] = props[key]
    }

    return obj
  }, {})
}
