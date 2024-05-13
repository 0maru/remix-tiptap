import type { MetaFunction } from "@remix-run/node";
import { BubbleMenu, EditorProvider, FloatingMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Editor</h1>
      <Tiptap />
    </div>
  );
}

const extensions = [
  StarterKit,
]

const content = '<p>Hello World!</p>'

const Tiptap = () => {
  return (
    <EditorProvider extensions={extensions} content={content}>
      <FloatingMenu>floating menu</FloatingMenu>
      <BubbleMenu>BubbleMenu</BubbleMenu>
    </EditorProvider>
  )
}