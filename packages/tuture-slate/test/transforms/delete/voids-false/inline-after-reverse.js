/** @jsx jsx */

import { Transforms } from 'tuture-slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.delete(editor, { reverse: true })
}

export const input = (
  <editor>
    <block>
      <text />
      <inline void>
        <text />
      </inline>
      <cursor />
    </block>
  </editor>
)

export const output = (
  <editor>
    <block>
      <text>
        <cursor />
      </text>
    </block>
  </editor>
)
