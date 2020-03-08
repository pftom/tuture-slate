/** @jsx jsx */

import { Transforms } from "tuture-slate"
import { jsx } from '../..'

export const run = editor => {
  Transforms.delete(editor)
}

export const input = (
  <editor>
    <block>
      <text />
      <inline a>
        o<anchor />
        ne
      </inline>
      <text />
    </block>
    <block>
      <text />
      <inline b>
        tw
        <focus />o
      </inline>
      <text />
    </block>
  </editor>
)

export const output = input
