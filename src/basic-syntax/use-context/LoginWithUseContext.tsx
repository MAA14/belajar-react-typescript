import { useContext } from "react";
import { UserContext } from "./UserContext";

// const userContext = useContext(UserContext); // Error gk bisa diakses

// Dengan UseContext kita tidak perlu props untuk mengirim data dan menerima data melainkan kita hanya perlu Contextnya kemudian menjadikan Component ini sebagai child dari ContextProvidernya
export function LoginWithUseContext() {
  // Import UserContext bukan UserContextProvider,
  // karena UserContextProvider diimport nanti di main.tsx atau di Component yang akan mencakup semua component yang membutuhkan Provider ini
  // Jangan initialize Context diluar fungsi Component karena nanti gk bisa diakses
  const userContext = useContext(UserContext);

  function handleLogin() {
    if (userContext) {
      userContext.setUser({
        name: "MAA",
        email: "maa@gmail.com",
      });
    }
  }

  function handleLogout() {
    if (userContext) {
      userContext.setUser(null);
    }
  }

  return (
    <div className="container">
      <div className="button-container">
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <p>
        User name is <b>{userContext?.user?.name}</b>
      </p>
      <p>
        User name is <b>{userContext?.user?.email}</b>
      </p>
    </div>
  );
}

/**
 * @IMPORTANT
 * @Step_Berikutnya lihat di main.tsx ada UserContextProvider
 */
