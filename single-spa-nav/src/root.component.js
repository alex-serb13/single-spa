import { MantineProvider } from "@mantine/core";
import { Navigation } from "./Navigation";

export default function Root() {
  return (
    <MantineProvider>
      <Navigation />
    </MantineProvider>
  );
}
