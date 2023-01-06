import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { Navigation } from "./Navigation";

export default function Root() {
  return (
    <BrowserRouter>
      <MantineProvider>
        <Navigation />
      </MantineProvider>
    </BrowserRouter>
  );
}
