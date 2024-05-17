import { Box } from "@radix-ui/themes"
import Underline from "@tiptap/extension-underline"
import { BubbleMenu, EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { css } from "styled-system/css"

const CustomeEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Underline]
  })

  return (
    <Box>
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
    </Box>
  )
}

export default CustomeEditor