import {Editor} from "@tiptap/react"
import {Button, ButtonProps} from "react-aria-components"
import {IconBold, IconItalic, IconUnderline} from "@tabler/icons-react";
import {css} from "styled-system/css";


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
    <Button
      {...props}
      className={css({
        padding: '0.2rem',
        margin: '0 0.2rem'
      })
      }>
      {props.children}
    </Button>
  )
}

export default Toolbar
