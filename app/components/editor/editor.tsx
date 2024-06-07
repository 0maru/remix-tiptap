import { BubbleMenu, Editor, EditorContent } from "@tiptap/react"
import { css } from "styled-system/css"

const CustomeEditor = ({ editor }: { editor: Editor }) => {


  return (
    <div>
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <div></div>
        </BubbleMenu>
      )}
      <EditorContent editor={editor} className={css({
        width: '100%',
        height: '100%',
        minHeight: '100%',
        padding: '2rem 1.3rem'
      })} />
    </div>
  )
}

export default CustomeEditor
