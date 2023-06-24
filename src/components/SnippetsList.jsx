import { useEffect } from "react";
import { readDir } from "@tauri-apps/api/fs";
import { desktopDir } from "@tauri-apps/api/path";
import { useSnippetStore } from "../store/snippetsStore";
import { SnippetsItem } from "./SnippetsItem";

export const SnippetsList = () => {
  const setSnippetsNames = useSnippetStore((state) => state.setSnippetsNames);
  const snippetNames = useSnippetStore((state) => state.snippetsName); // Corregido

  useEffect(() => {
    async function loadFiles() {
      const desktopPath = await desktopDir();
      const result = await readDir(`${desktopPath}/taurifiles`);
      const filenames = result.map((file) => file.name);
      setSnippetsNames(filenames);
    }

    loadFiles();
  }, []);

  return (
    <div>
      {snippetNames.map((snippetName) => (
        <SnippetsItem snippetName={snippetName} />
      ))}
    </div>
    // <div>
    //   {snippetNames.map((snippetName, i) => (
    //     <SnippetsItem key={i} snippetName={snippetName} />
    //   ))}
    // </div>
  );
};
