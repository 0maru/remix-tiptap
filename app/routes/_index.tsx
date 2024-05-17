import type { MetaFunction } from "@remix-run/node";
import { BubbleMenu, EditorProvider, FloatingMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { css } from "styled-system/css";
import CustomeEditor from "~/components/editor/editor";
import Toolbar from "~/components/editor/toolbar";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }} className={css({
      padding: "32px",
    })}>
      <h1>Editor</h1>
      <div className={css({
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        height: "400px",
        width: "600px",
        boxShadow: "0 0 0 1px #4385bb12",
      })}>
        <Toolbar />
        <CustomeEditor />
      </div>
    </div>
  );
}

const extensions = [
  StarterKit,
]

const content = '<p>Hello World!</p><h1>title</1>'

const TiptapEditor = () => {
  return (
    <EditorProvider extensions={extensions} content={content}>
      <FloatingMenu>floating menu</FloatingMenu>
      <BubbleMenu>
        <div>
          <button>ｘ</button>
          <button>y</button>
          <button>z</button>
        </div>
      </BubbleMenu>
    </EditorProvider>
  )
}