/** @jsx jsx  */

import { Node } from 'tuture-slate'
import { jsx } from 'tuture-slate-hyperscript'

export const input = (
  <editor>
    <element>
      <text />
    </element>
  </editor>
)

export const test = value => {
  return Array.from(Node.ancestors(value, [0, 0]))
}

export const output = [
  [input, []],
  [input.children[0], [0]],
]
