/** @jsx jsx */

import { Transforms } from 'tuture-slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.move(editor, { reverse: true })
}

export const input = (
  <editor>
    <block>
      one <cursor />
      two three
    </block>
  </editor>
)

export const output = (
  <editor>
    <block>
      one
      <cursor /> two three
    </block>
  </editor>
)
