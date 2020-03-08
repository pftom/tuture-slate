/** @jsx jsx */

import { Transforms } from "tuture-slate"
import { jsx } from '../../..'

export const run = editor => {
  Transforms.delete(editor)
}

export const input = (
  <editor>
    <block>
      <cursor />
    </block>
    <block void>
      <text />
    </block>
  </editor>
)

export const output = (
  <editor>
    <block>
      <cursor />
    </block>
  </editor>
)
