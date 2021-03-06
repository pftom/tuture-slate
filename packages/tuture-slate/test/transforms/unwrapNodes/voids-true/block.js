/** @jsx jsx */

import { Transforms } from 'tuture-slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.unwrapNodes(editor, { at: [0], voids: true })
}

export const input = (
  <editor>
    <block void>
      <block>word</block>
    </block>
  </editor>
)

export const output = (
  <editor>
    <block>word</block>
  </editor>
)
