/** @jsx jsx */

import { Transforms } from "tuture-slate"
import { jsx } from '../../..'

export const run = editor => {
  Transforms.delete(editor, { unit: 'character', distance: 3, reverse: true })
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
      w<cursor />
    </block>
  </editor>
)
