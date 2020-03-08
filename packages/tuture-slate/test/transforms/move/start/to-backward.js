/** @jsx jsx */

import { Transforms } from "tuture-slate"
import { jsx } from '../../..'

export const run = editor => {
  Transforms.move(editor, { edge: 'start', distance: 8 })
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
      one two t<focus />
      hre
      <anchor />e
    </block>
  </editor>
)
