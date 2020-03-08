/** @jsx jsx */

import { Transforms } from 'tuture-slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.delete(editor, { unit: 'character', reverse: true })
}

export const input = (
  <editor>
    <block>
      one
      <inline>two</inline>
      <cursor />
    </block>
  </editor>
)

export const output = (
  <editor>
    <block>
      one
      <inline>tw</inline>
      <cursor />
    </block>
  </editor>
)
