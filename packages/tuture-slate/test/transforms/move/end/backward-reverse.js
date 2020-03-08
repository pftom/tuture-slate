/** @jsx jsx */

import { Transforms } from "tuture-slate"
import { jsx } from '../../..'

export const run = editor => {
  Transforms.move(editor, { edge: 'end', reverse: true })
}

export const input = (
  <editor>
    <block>
      one <focus />
      two t<anchor />
      hree
    </block>
  </editor>
)

export const output = (
  <editor>
    <block>
      one <focus />
      two <anchor />
      three
    </block>
  </editor>
)
