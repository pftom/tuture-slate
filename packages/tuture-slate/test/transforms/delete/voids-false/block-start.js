/** @jsx jsx */

import { Transforms } from 'tuture-slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.delete(editor)
}

export const input = (
  <editor>
    <block void>
      <anchor />
    </block>
    <block>one</block>
    <block>
      tw
      <focus />o
    </block>
    <block>three</block>
  </editor>
)

export const output = (
  <editor>
    <block>
      <cursor />o
    </block>
    <block>three</block>
  </editor>
)
