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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { List, List2 } from "./basic-syntax/generic-props/List.tsx";
import { RestrictedNumber } from "./basic-syntax/restricting-props/RestrictedNumber.tsx";
import { Notification } from "./basic-syntax/template-literals-and-exclude/Notification.tsx";
import { CustomButton } from "./basic-syntax/wrapping-html/CustomButton.tsx";
import { TextPolymorphic } from "./basic-syntax/polymorphic-element/TextPolymorphic.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h3 className="center">
                Belajar Use State untuk Login Component
              </h3>
              <Login></Login>
              <h3 className="center">
                Belajar Use State dengan Optional Value dan cara menggunakan Map
                untuk membuat component JSX
              </h3>
              <Users></Users>
              <h3>
                Belajar Use State dengan empty statenya menggunakan{" "}
                {"{} as TypeData"}
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
            </>
          }
        />
        <Route
          path="/generic-props"
          element={
            <>
              <h3>Belajar Generic Props (as string)</h3>
              <List
                items={[
                  {
                    id: 1,
                    element: "Item 1 as String",
                  },
                  {
                    id: 2,
                    element: "Item 2 as String",
                  },
                  {
                    id: 3,
                    element: "Item 3 as String",
                  },
                ]}
              />
              <h3>
                Belajar Generic Props (as Object) di klik itemnya nanti muncul
                detail item di console
              </h3>
              <List2
                items={[
                  {
                    id: 1,
                    firstName: "Ahmad",
                    lastName: "Muhammad",
                  },
                  {
                    id: 2,
                    firstName: "Rio",
                    lastName: "Rizki",
                  },
                  {
                    id: 3,
                    firstName: "Firman",
                    lastName: "Saputra",
                  },
                ]}
              />
            </>
          }
        />
        <Route
          path="/restricted-props"
          element={
            <>
              <h3>Belajar Restricting Props</h3>
              <RestrictedNumber value={10} isPositive />
              <RestrictedNumber value={-10} isNegative />
              <RestrictedNumber value={0} isZero />
              {/* <RestrictedNumber value={100} isPositive isNegative isZero />  @ERROR */}
            </>
          }
        />
        <Route
          path="/template-literals-and-exclude"
          element={
            <>
              <Notification
                position="center"
                title="Success Notification"
                message="This is a message of Success notification"
                type="success"
              />
              <Notification
                position="left-top"
                title="Error Notification"
                message="This is a message of Error notification"
                type="error"
              />
              <Notification
                position="center-top"
                title="Error Notification"
                message="This is a message of Error notification"
                type="error"
              />
              <Notification
                position="right-top"
                title="Warning Notification"
                message="This is a message of Warning notification"
                type="warning"
              />
              <Notification
                position="center-bottom"
                title="Warning Notification"
                message="This is a message of Warning notification"
                type="warning"
              />
              <Notification
                position="left-center"
                title="Success Notification"
                message="This is a message of Success notification"
                type="success"
              />
              <Notification
                position="left-bottom"
                title="Error Notification"
                message="This is a message of Error notification"
                type="error"
              />
              <Notification
                position="right-center"
                title="Warning Notification"
                message="This is a message of Warning notification"
                type="warning"
              />
              <Notification
                position="right-bottom"
                title="Success Notification"
                message="This is a message of Success notification"
                type="success"
              />
            </>
          }
        />
        <Route
          path="/wrapping-html"
          element={
            <CustomButton
              variant="primary"
              onClick={() =>
                alert(
                  "OnClick props bekerja dengan baik karena kita menggunakan {...rest} dan React.ComponentProps<'button'>"
                )
              }
            >
              Button ini hanya bisa menerima string sebagai children, tidak bisa
              menerima HTML element
              {/* <div></div> @ERRORR */}
            </CustomButton>
          }
        />
        <Route
          path="/polymorphic-element"
          element={
            <>
              <TextPolymorphic as="h3">Ini as H3</TextPolymorphic>
              <TextPolymorphic as="p">Ini as P</TextPolymorphic>
              <TextPolymorphic as="a" href="/">
                Ini as a (bisa di klik nanti balik ke "/" karena href)
              </TextPolymorphic>
              <TextPolymorphic as="button">Ini as button</TextPolymorphic>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
