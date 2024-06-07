import {Editor} from "@tiptap/react"
import {Button, ButtonProps} from "react-aria-components"
import {IconBold, IconItalic, IconUnderline} from "@tabler/icons-react";


const Toolbar = ({editor}: { editor: Editor }) => {
  console.log(editor)

  return (
    <div>
      <ToolbarIconButton onPress={editor.commands.setBold}>
        <IconBold/>
      </ToolbarIconButton>
      <ToolbarIconButton onPress={editor.commands.setItalic}>
        <IconItalic/>
      </ToolbarIconButton>
      <ToolbarIconButton onPress={editor.commands.setUnderline}>
        <IconUnderline/>
      </ToolbarIconButton>
    </div>
  )
}

const ToolbarIconButton = (props: ButtonProps) => {
  return (
    <Button {...props}>
      {props.children}
    </Button>
  )
}

export default Toolbar
