import { Text } from "tuture-slate"

export const input = true

export const test = value => {
  return Text.isTextList(value)
}

export const output = false
