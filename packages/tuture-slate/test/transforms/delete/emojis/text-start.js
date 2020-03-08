/** @jsx jsx */

import { Transforms } from 'tuture-slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.delete(editor, { unit: 'character' })
}

export const input = (
  <editor>
    <block>
      <cursor />
      📛word
    </block>
  </editor>
)

export const output = (
  <editor>
    <block>
      <cursor />
      word
    </block>
  </editor>
)
