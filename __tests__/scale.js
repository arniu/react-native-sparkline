/* global describe, it, expect */

import createScale from '../src/scale'
import * as helper from '../src/helper'

const width = 240
const height = 60
const padding = 4
const data = [3, 1, 4]

describe('scaleX', () => {
  // prettier-ignore
  const scaleX = createScale(
    [0, data.length - 1],
    [padding, width - padding]
  )

  it('x0 => y0', () => {
    expect(scaleX(0)).toBe(padding)
  })

  it('x1 => y1', () => {
    expect(scaleX(data.length - 1)).toBe(width - padding)
  })

  it('middle => center', () => {
    const middle = (0 + data.length - 1) / 2
    expect(scaleX(middle)).toBe(width / 2)
  })
})

describe('scaleY', () => {
  const max = helper.max(data)
  const min = helper.min(data)

  // prettier-ignore
  const scaleY = createScale(
    [min, max],
    [height - padding, padding]
  )

  it('x0 => y0', () => {
    expect(scaleY(min)).toBe(height - padding)
  })

  it('x1 => y1', () => {
    expect(scaleY(max)).toBe(padding)
  })

  it('middle => center', () => {
    const middle = (min + max) / 2
    expect(scaleY(middle)).toBe(height / 2)
  })
})
