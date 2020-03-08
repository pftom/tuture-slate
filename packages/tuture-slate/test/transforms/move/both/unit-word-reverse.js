/** @jsx jsx */

import { Transforms } from "tuture-slate"
import { jsx } from '../../..'

export const run = editor => {
  Transforms.move(editor, { reverse: true, unit: 'word' })
}

export const input = (
  <editor>
    <block>
      one tw
      <cursor />o three
    </block>
  </editor>
)

export const output = (
  <editor>
    <block>
      one <cursor />
      two three
    </block>
  </editor>
)
