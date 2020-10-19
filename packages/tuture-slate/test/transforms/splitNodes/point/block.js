/** @jsx jsx */

import { Editor, Transforms } from 'tuture-slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.splitNodes(editor, {
    at: { path: [0, 0], offset: 2 },
    match: n => Editor.isBlock(editor, n),
  })
}

export const input = (
  <editor>
    <block>
      <text>word</text>
    </block>
  </editor>
)

export const output = (
  <editor>
    <block>wo</block>
    <block>rd</block>
  </editor>
)