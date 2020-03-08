/** @jsx jsx */

import { Transforms } from 'tuture-slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.splitNodes(editor)
}

export const input = (
  <editor>
    <block>one</block>
    <block>
      <anchor />
      two
    </block>
    <block>
      <focus />
      three
    </block>
  </editor>
)

export const output = (
  <editor>
    <block>one</block>
    <block>
      <text />
    </block>
    <block>
      <cursor />
      three
    </block>
  </editor>
)
