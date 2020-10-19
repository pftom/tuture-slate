/** @jsx jsx */

import { Editor } from 'tuture-slate'
import { jsx } from '../../..'

export const input = (
  <editor>
    <block>
      one<inline>two</inline>three
    </block>
  </editor>
)

export const test = editor => {
  const inline = editor.children[0].children[1]
  return Editor.isInline(editor, inline)
}

export const output = true