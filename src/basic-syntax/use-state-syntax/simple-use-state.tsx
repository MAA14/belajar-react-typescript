import { useState } from "react";

export function Login() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  function login() {
    setIsLoggedIn(true);
    // setIsLoggedIn(0); // ini akan error karena diawal kita set valuenya boolean (Typescript akan menjaga datanya otomatis tergantung value awal pada useState)
  }

  function logout() {
    setIsLoggedIn(false);
  }

  return (
    <div className="container">
      <div className="sub-container">
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
      </div>
      <p>User is {isLoggedIn ? "login" : "logout"}</p>
    </div>
  );
}
