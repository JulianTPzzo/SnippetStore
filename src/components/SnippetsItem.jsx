import { useSnippetStore } from "../store/snippetsStore";
export const SnippetsItem = ({snippetName}) => {

  const setSelectedSnippet = useSnippetStore( state => state.setSelectedSnippet)
  const selectedSnippet = useSnippetStore( state => state.selectedSnippet)

  const itemClassName = `py-2 px-4 hover:bg-neutral-800 hover:cursor-pointer ${ selectedSnippet === snippetName ? "bg-neutral-800" : ""}`;

  return (
    <div className = {itemClassName}
        onClick={() => {
          setSelectedSnippet(snippetName)
        }}
    >
      <h1>{snippetName}</h1>
    </div>
  )
}
