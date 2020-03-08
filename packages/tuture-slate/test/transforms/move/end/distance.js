/** @jsx jsx */

import { Transforms } from "tuture-slate"
import { jsx } from '../../..'

export const run = editor => {
  Transforms.move(editor, { edge: 'end', distance: 3 })
}

export const input = (
  <editor>
    <block>
      one <anchor />
      two t<focus />
      hree
    </block>
  </editor>
)

export const output = (
  <editor>
    <block>
      one <anchor />
      two thre
      <focus />e
    </block>
  </editor>
)
