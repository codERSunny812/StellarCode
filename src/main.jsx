import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./App.jsx";
import { SessionContextProvider } from "./Context/AuthContext";
import { LangContextProvider } from "./Context/LangContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <SessionContextProvider>
        <LangContextProvider>
          <RouterProvider router={AppRouter} />
        </LangContextProvider>
      </SessionContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
