/* global describe, it, expect */

import createScale from '../src/scale'
import * as helper from '../src/helper'

const width = 240
const height = 60
const margin = 4
const data = [3, 1, 4]

describe('scaleX', () => {
  // prettier-ignore
  const scaleX = createScale(
    [0, data.length - 1],
    [margin, width - margin]
  )

  it('x0 => y0', () => {
    expect(scaleX(0)).toBe(margin)
  })

  it('x1 => y1', () => {
    expect(scaleX(data.length - 1)).toBe(width - margin)
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
    [height - margin, margin]
  )

  it('x0 => y0', () => {
    expect(scaleY(min)).toBe(height - margin)
  })

  it('x1 => y1', () => {
    expect(scaleY(max)).toBe(margin)
  })

  it('middle => center', () => {
    const middle = (min + max) / 2
    expect(scaleY(middle)).toBe(height / 2)
  })
})
