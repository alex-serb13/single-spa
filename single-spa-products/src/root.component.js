import { QueryClient, QueryClientProvider } from "react-query";
import "./main.css";

const queryClient = new QueryClient();

import { Products } from "./Products";

export default function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <Products />
    </QueryClientProvider>
  );
}
