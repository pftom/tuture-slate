/** @jsx jsx  */

import { Node } from 'tuture-slate'
import { jsx } from 'tuture-slate-hyperscript'

export const input = <text>one</text>

export const test = value => {
  return Node.string(value)
}

export const output = `one`
