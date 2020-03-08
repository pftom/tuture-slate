/** @jsx jsx  */

import { Node } from 'tuture-slate'
import { jsx } from 'tuture-slate-hyperscript'

export const input = (
  <element>
    <text>one</text>
    <text>two</text>
  </element>
)

export const test = value => {
  return Node.string(value, [1])
}

export const output = `onetwo`
