import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TagsTable from "./components/tags/tags";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TagsTable />
    </QueryClientProvider>
  );
}

export default App;
