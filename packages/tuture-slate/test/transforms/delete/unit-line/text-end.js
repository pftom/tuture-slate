/** @jsx jsx */

import { Transforms } from 'tuture-slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.delete(editor, { unit: 'line' })
}

export const input = (
  <editor>
    <block>
      one two three
      <cursor />
    </block>
  </editor>
)

export const output = input
