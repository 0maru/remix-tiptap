import { Editor } from "@tiptap/react"
import { css } from "styled-system/css"

const EditorPreview = ({ editor }: { editor: Editor }) => {
  return (
    <div className={css({
      padding: "1rem"
    })}>
      <p>HTML preview</p>
      <div dangerouslySetInnerHTML={{ __html: editor.getHTML() }}></div>
      <p>preview</p>
      <div>{editor.getHTML()}</div>
    </div>
  )
}

export default EditorPreview