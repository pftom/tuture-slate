import isPlainObject from 'is-plain-object'
import { Operation } from "slate"

/**
 * `History` objects hold all of the operations that are applied to a value, so
 * they can be undone or redone as necessary.
 */

export interface History {
  redos: Operation[][]
  undos: Operation[][]
}

export const History = {
  /**
   * Check if a value is a `History` object.
   */

  isHistory(value: any): value is History {
    return (
      isPlainObject(value) &&
      Array.isArray(value.redos) &&
      Array.isArray(value.undos) &&
      (value.redos.length === 0 || Operation.isOperationList(value.redos[0])) &&
      (value.undos.length === 0 || Operation.isOperationList(value.undos[0]))
    )
  },
}
