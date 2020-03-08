import { Path } from 'tuture-slate'

export const input = {
  path: [0, 1, 2],
  another: [1],
}

export const test = ({ path, another }) => {
  return Path.endsAt(path, another)
}

export const output = false
