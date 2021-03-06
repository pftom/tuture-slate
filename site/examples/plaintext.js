import React, { useState, useMemo } from 'react'
import { createEditor } from 'tuture-slate'
import { Slate, Editable, withReact } from 'tuture-slate-react'
import { withHistory } from 'tuture-slate-history'

const PlainTextExample = () => {
  const [value, setValue] = useState(initialValue)
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])
  return (
    <Slate editor={editor} value={value} onChange={value => setValue(value)}>
      <Editable placeholder="Enter some plain text..." />
    </Slate>
  )
}

const initialValue = [
  {
    children: [
      { text: 'This is editable plain text, just like a <textarea>!' },
    ],
  },
]

export default PlainTextExample
