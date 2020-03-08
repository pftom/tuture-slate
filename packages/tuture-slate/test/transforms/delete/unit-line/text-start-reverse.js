/** @jsx jsx */

import { Transforms } from 'tuture-slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.delete(editor, { unit: 'line', reverse: true })
}

export const input = (
  <editor>
    <block>
      <cursor />
      one two three
    </block>
  </editor>
)

export const output = input
