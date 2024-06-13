import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Login } from "./basic-syntax/use-state-syntax/simple-use-state.tsx";
import { Users } from "./basic-syntax/use-state-syntax/future-value-use-state.tsx";
import { IncDecWithState } from "./basic-syntax/use-state-syntax/use-state-with-as-object.tsx";
import { FormUserWithReducer } from "./basic-syntax/use-reducer-syntax/use-reducer-tutorial.tsx";
import { UserContextProvider } from "./basic-syntax/use-context/UserContext.tsx";
import { LoginWithUseContext } from "./basic-syntax/use-context/LoginWithUseContext.tsx";
import { ToggleButton } from "./basic-syntax/use-ref-syntax/ToggleButton.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <h3 className="center">Belajar Use State untuk Login Component</h3>
    <Login></Login>
    <h3 className="center">
      Belajar Use State dengan Optional Value dan cara menggunakan Map untuk
      membuat component JSX
    </h3>
    <Users></Users>
    <h3>
      Belajar Use State dengan empty statenya menggunakan {"{} as TypeData"}
    </h3>
    <IncDecWithState></IncDecWithState>
    <h3>Belajar Use Reducer</h3>
    <FormUserWithReducer></FormUserWithReducer>
    <h3>Belajar Use Context</h3>
    <UserContextProvider>
      <LoginWithUseContext></LoginWithUseContext>
    </UserContextProvider>
    <h3>Belajar Use Ref</h3>
    <ToggleButton></ToggleButton>
  </React.StrictMode>
);
