import { Path } from "tuture-slate"

export const input = {
  path: [0],
  another: [0, 2],
}

export const test = ({ path, another }) => {
  return Path.endsAt(path, another)
}

export const output = true
