import Table from "./components/Table";
import useFetchItems from "./hooks/useFetchItems";
import CreateButton from "./components/CreateButton";
import { Toaster } from "sonner";

function App() {
  const { resp, loading, reload } = useFetchItems();

  return (
    <>
      <div className="container">
        <Table data={resp} reload={reload}></Table>
        {loading && <article aria-busy="true"></article>}
        <CreateButton reload={reload} />
        <Toaster richColors />
      </div>
    </>
  );
}

export default App;
