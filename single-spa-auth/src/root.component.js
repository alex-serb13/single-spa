import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

export default function Root() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
