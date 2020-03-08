/** @jsx jsx  */

import { Node } from "tuture-slate"
import { jsx } from 'tuture-slate-hyperscript'

export const input = (
  <editor>
    <element>
      <text key="a" />
      <text key="b" />
    </element>
  </editor>
)

export const test = value => {
  return Node.first(value, [0])
}

export const output = [<text key="a" />, [0, 0]]
