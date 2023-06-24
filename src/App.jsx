import { SnippetsEditor } from "./components/SnippetsEditor";
import { SnippetsForm } from "./components/SnippetsForm";
import { SnippetsList } from "./components/SnippetsList";

const App = () => {
  return (
    <div className="h-screen bg-zinc-900 text-white grid grid-cols-12">
      <div className="p-2 col-span-3">
        <SnippetsForm />
        <SnippetsList />
      </div>
      <div className="col-span-9 bg-zinc-950 flex justify-center items-center">
        <SnippetsEditor />
      </div>
    </div>
  );
};

export default App;
