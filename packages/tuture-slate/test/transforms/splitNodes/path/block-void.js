/** @jsx jsx */

import { Transforms } from 'tuture-slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.splitNodes(editor, { at: [0, 1] })
}

export const input = (
  <editor>
    <block void>
      <block>one</block>
      <block>two</block>
    </block>
  </editor>
)

export const output = (
  <editor>
    <block void>
      <block>one</block>
      <block>two</block>
    </block>
  </editor>
)
