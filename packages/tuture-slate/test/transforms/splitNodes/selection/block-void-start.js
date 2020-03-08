/** @jsx jsx */

import { Transforms } from 'tuture-slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.splitNodes(editor)
}

export const input = (
  <editor>
    <block void>
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
      <cursor />
      other
    </block>
  </editor>
)
