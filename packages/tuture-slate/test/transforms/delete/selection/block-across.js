/** @jsx jsx */

import { Transforms } from 'tuture-slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.delete(editor)
}

export const input = (
  <editor>
    <block>
      wo
      <anchor />
      rd
    </block>
    <block>
      an
      <focus />
      other
    </block>
  </editor>
)

export const output = (
  <editor>
    <block>
      wo
      <cursor />
      other
    </block>
  </editor>
)
