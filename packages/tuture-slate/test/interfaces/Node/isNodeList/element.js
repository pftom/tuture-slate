import { Node } from "tuture-slate"

export const input = {
  children: [],
}

export const test = value => {
  return Node.isNodeList(value)
}

export const output = false
