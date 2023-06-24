import  Editor from "@monaco-editor/react";
import { useSnippetStore } from "../store/snippetsStore";
export const SnippetsEditor = () => {

  const selectedSnippet = useSnippetStore( state => state.selectedSnippet)

  return (
    <>
      {
        selectedSnippet? (
          <Editor
          theme="vs-dark"
          defaultLanguage="javascript"
          options={{
            fontSize:20
          }}
        />
        ) :

        (<h1>No hay un snippet seleccionado</h1>)
      }
    </>
  )
}
