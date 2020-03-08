/** @jsx jsx */

import { Editor } from 'tuture-slate'
import { jsx } from '../../../..'

export const input = (
  <editor>
    <block>one</block>
  </editor>
)

export const test = editor => {
  return Array.from(Editor.positions(editor, { at: [], reverse: true }))
}

export const output = [
  { path: [0, 0], offset: 3 },
  { path: [0, 0], offset: 2 },
  { path: [0, 0], offset: 1 },
  { path: [0, 0], offset: 0 },
]
