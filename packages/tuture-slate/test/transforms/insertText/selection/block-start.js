/** @jsx jsx */

import { Transforms } from 'tuture-slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.insertText(editor, 'a')
}

export const input = (
  <editor>
    <block>
      <cursor />
      word
    </block>
  </editor>
)

export const output = (
  <editor>
    <block>
      a<cursor />
      word
    </block>
  </editor>
)
