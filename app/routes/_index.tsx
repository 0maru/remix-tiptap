'use client'

import type { MetaFunction } from "@remix-run/node";
import Underline from "@tiptap/extension-underline";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { css } from "styled-system/css";
import CustomeEditor from "~/components/editor/editor";
import EditorPreview from "~/components/editor/preview";
import Toolbar from "~/components/editor/toolbar";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const editor = useEditor({
    extensions: [StarterKit, Underline]
  })

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }} className={css({
      padding: "32px",
    })}>
      <div className={css({
        display: "flex",
      })}>
        <div>
          {editor && (<Toolbar editor={editor} />)}
          <div className={css({
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
            height: "400px",
            width: "600px",
            boxShadow: "0 0 0 1px #4385bb12",
          })}>
            {editor && (
              <CustomeEditor editor={editor} />
            )}
          </div>
        </div>
        <div>
          {editor && (
            <EditorPreview editor={editor} />
          )}
        </div>
      </div>
    </div>
  );
}
