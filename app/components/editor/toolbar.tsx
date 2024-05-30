import { FontBoldIcon, FontItalicIcon, HeadingIcon, TextNoneIcon } from "@radix-ui/react-icons"
import { Button } from "@radix-ui/themes"
import { Editor } from "@tiptap/react"

const Toolbar = ({ editor }: { editor: Editor }) => {
  return (
    <div>
      <Button onClick={
        () => {
          editor.commands.setBold()
        }
      }>
        <FontBoldIcon />
      </Button>
      <Button>
        <FontItalicIcon />
      </Button>
      <Button>
        <TextNoneIcon />
      </Button>
      <Button>
        <HeadingIcon />
      </Button>
    </div>
  )
}

export default Toolbar