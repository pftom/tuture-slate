import { Path } from 'tuture-slate'

export const input = {
  path: [0, 1],
  another: [0],
}

export const test = ({ path, another }) => {
  return Path.isDescendant(path, another)
}

export const output = true
