/** @jsx jsx */

import { Transforms } from 'tuture-slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.delete(editor)
}

export const input = (
  <editor>
    <block>
      <text />
      <inline>
        wo
        <anchor />r<focus />d
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
        wo
        <cursor />d
      </inline>
      <text />
    </block>
  </editor>
)