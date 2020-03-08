/** @jsx jsx */

import { Transforms } from "tuture-slate"
import { jsx } from '../../..'

export const run = editor => {
  Transforms.delete(editor, { unit: 'character' })
}

export const input = (
  <editor>
    <block>
      <text />
      <inline>
        <cursor />
        📛word
      </inline>
      <text />
    </block>
  </editor>
)

export const output = (
  <editor>
    <block>
      <text />
      <inline>
        <cursor />
        word
      </inline>
      <text />
    </block>
  </editor>
)
