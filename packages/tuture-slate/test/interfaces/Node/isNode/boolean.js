import { Node } from 'tuture-slate'

export const input = true

export const test = value => {
  return Node.isNode(value)
}

export const output = false
