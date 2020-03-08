import { Operation } from "tuture-slate"

export const input = {
  type: 'set_selection',
  properties: {},
  newProperties: {},
}

export const test = value => {
  return Operation.isOperation(value)
}

export const output = true
