import { Point } from "tuture-slate"

export const input = {
  point: {
    path: [0, 0],
    offset: 0,
  },
  another: {
    path: [0, 1],
    offset: 0,
  },
}

export const test = ({ point, another }) => {
  return Point.isAfter(point, another)
}

export const output = false
