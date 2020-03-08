/** @jsx jsx */

import { Transforms } from 'tuture-slate'
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
      <text />
      <inline>
        <cursor />
      </inline>
      <text />
    </block>
  </editor>
)

export const output = (
  <editor>
    <block>
      <text />
      <inline>
        <text />
      </inline>
      <text />
      <inline>
        fragment
        <cursor />
      </inline>
      <text />
    </block>
  </editor>
)
