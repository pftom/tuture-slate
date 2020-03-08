import { Element } from 'tuture-slate'

export const input = {
  children: [],
  operations: [],
  selection: null,
  marks: null,
  addMark() {},
  apply() {},
  deleteBackward() {},
  deleteForward() {},
  deleteFragment() {},
  insertBreak() {},
  insertFragment() {},
  insertNode() {},
  insertText() {},
  isInline() {},
  isVoid() {},
  normalizeNode() {},
  onChange() {},
  removeMark() {},
}

export const test = value => {
  return Element.isElement(value)
}

export const output = false
