/* global describe, it, expect */

import * as helper from '../src/helper'

const data = [3, 1, 4]

describe('max', () => {
  it('should return the correct value', () => {
    expect(helper.max(data)).toBe(4)
  })

  it('should return -Infinity if data is empty', () => {
    expect(helper.max([])).toBe(-Infinity)
  })

  it('should return -Infinity if data is null', () => {
    expect(helper.max(null)).toBe(-Infinity)
  })

  it('should return -Infinity if data is undefined', () => {
    expect(helper.max(undefined)).toBe(-Infinity)
  })

  it('should return -Infinity if nothing is given', () => {
    expect(helper.max()).toBe(-Infinity)
  })
})

describe('min', () => {
  it('should return the correct value', () => {
    expect(helper.min(data)).toBe(1)
  })

  it('should return Infinity if data is empty', () => {
    expect(helper.min([])).toBe(Infinity)
  })

  it('should return Infinity if data is null', () => {
    expect(helper.min(null)).toBe(Infinity)
  })

  it('should return Infinity if data is undefined', () => {
    expect(helper.min(undefined)).toBe(Infinity)
  })

  it('should return Infinity if nothing is given', () => {
    expect(helper.min()).toBe(Infinity)
  })
})

describe('mean', () => {
  it('should return the correct value', () => {
    expect(helper.mean(data)).toBe(8 / 3)
  })
})

describe('median', () => {
  it('should return the correct value', () => {
    expect(helper.median(data)).toBe(3)
  })
})
