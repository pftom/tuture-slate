/** @jsx jsx */

import { Transforms } from "tuture-slate"
import { jsx } from '../../..'

export const run = editor => {
  Transforms.insertFragment(
    editor,
    <fragment>
      <inline>fragment</inline>
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
    <block>
      <text />
      <inline>
        fragment
        <cursor />
      </inline>
      word
    </block>
  </editor>
)
