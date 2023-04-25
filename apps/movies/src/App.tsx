import React from "react";
import { AppShell } from "ui";

function App() {
  return (
    <AppShell
      title="Movies"
      colorScheme="light"
      routes={[
        {
          path: "/",
          element: () => <div>Home is rendered</div>,
        },
      ]}
      navLinks={[
        {
          label: "Home",
          path: "/",
        },
        {
          label: "PlayList",
          path: "/playlist",
        },
      ]}
    />
  );
}

export default App;
