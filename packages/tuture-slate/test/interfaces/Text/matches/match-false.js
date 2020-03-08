import { Text } from 'tuture-slate'

export const input = {
  text: { text: '', bold: true },
  props: { italic: true },
}

export const test = ({ text, props }) => {
  return Text.matches(text, props)
}

export const output = false
