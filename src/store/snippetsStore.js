import { create } from 'zustand';

const useSnippetStore = create((set) => ({
  snippetsName: [],
  selectedSnippet: null,
  addSnippetName: (name) =>
    set((state) => ({
      snippetsName: [...state.snippetsName, name],
    })),
  setSnippetsNames: (names) => set({ snippetsName: names }),
  setSelectedSnippet: (snippet) => set ({ selectedSnippet: snippet})
}));

export { useSnippetStore };

