import { Node } from 'tuture-slate'

export const input = {}

export const test = value => {
  return Node.isNode(value)
}

export const output = false
