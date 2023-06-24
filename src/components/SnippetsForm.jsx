import {writeTextFile} from '@tauri-apps/api/fs'
import { desktopDir } from "@tauri-apps/api/path";
import { useState } from 'react';
export const SnippetsForm = () => {

  const [snippetName, setSnippetName] = useState("")

  return (
<form 
onSubmit={async (e) => {
  e.preventDefault()
  const desktopPath = await desktopDir()
  await writeTextFile(`${desktopPath}/taurifiles/${snippetName}.json`,`{}`)
  setSnippetName('');
}}>
  <input type="text" 
    className="bg-zinc-900 w-full border-none outline-none p-4" 
    placeholder="Escribe un snippet"
    onChange={(e) => setSnippetName(e.target.value)}
    value={snippetName}
  />
  <button className='hidden'>Guardar</button>
</form>  )
}
