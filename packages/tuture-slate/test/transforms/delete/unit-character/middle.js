/** @jsx jsx */

import { Transforms } from 'tuture-slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.delete(editor, { unit: 'character' })
}

export const input = (
  <editor>
    <block>
      wo
      <cursor />
      rd
    </block>
  </editor>
)

export const output = (
  <editor>
    <block>
      wo
      <cursor />d
    </block>
  </editor>
)
