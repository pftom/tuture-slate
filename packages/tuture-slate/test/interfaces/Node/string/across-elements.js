/** @jsx jsx  */

import { Node } from 'tuture-slate'
import { jsx } from 'tuture-slate-hyperscript'

export const input = (
  <editor>
    <element>
      <text>one</text>
      <text>two</text>
    </element>
    <element>
      <text>three</text>
      <text>four</text>
    </element>
  </editor>
)

export const test = value => {
  return Node.string(value)
}

export const output = `onetwothreefour`
