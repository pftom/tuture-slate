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
  return Node.child(value, 0)
}

export const output = input.children[0]
