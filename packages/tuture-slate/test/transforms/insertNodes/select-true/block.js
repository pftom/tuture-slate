/** @jsx jsx */

import { Transforms } from 'tuture-slate'
import { jsx } from '../../..'

export const input = (
  <editor>
    <block>
      <cursor />
      one
    </block>
  </editor>
)

export const run = editor => {
  Transforms.insertNodes(
    editor,
    <block>
      <text />
    </block>,
    { at: [0], select: true }
  )
}

export const output = (
  <editor>
    <block>
      <cursor />
    </block>
    <block>one</block>
  </editor>
)
