/** @jsx jsx */

import { Editor, Text } from "tuture-slate"
import { jsx } from '../../..'

export const input = (
  <editor>
    <block>one</block>
    <block>two</block>
  </editor>
)

export const test = editor => {
  return Editor.next(editor, { at: [0], match: Text.isText })
}

export const output = [<text>two</text>, [1, 0]]
