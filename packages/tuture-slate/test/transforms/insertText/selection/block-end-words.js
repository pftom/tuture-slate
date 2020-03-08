/** @jsx jsx */

import { Transforms } from 'tuture-slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.insertText(editor, ' a few words')
}

export const input = (
  <editor>
    <block>
      word
      <cursor />
    </block>
  </editor>
)

export const output = (
  <editor>
    <block>
      word a few words
      <cursor />
    </block>
  </editor>
)
