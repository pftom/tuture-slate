/** @jsx jsx */

import { Editor } from "tuture-slate"
import { jsx } from '../../..'

export const input = (
  <editor>
    <block>
      <text />
    </block>
  </editor>
)

export const test = editor => {
  const block = editor.children[0]
  return Editor.isEmpty(editor, block)
}

export const output = true
