/** @jsx jsx */

import { Transforms } from "tuture-slate"
import { jsx } from '../../..'

export const run = editor => {
  Transforms.insertFragment(
    editor,
    <fragment>
      <block>one</block>
      <block>two</block>
      <block>three</block>
    </fragment>
  )
}

export const input = (
  <editor>
    <block>
      <cursor />
      word
    </block>
  </editor>
)

export const output = (
  <editor>
    <block>one</block>
    <block>two</block>
    <block>
      three
      <cursor />
      word
    </block>
  </editor>
)
