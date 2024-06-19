import { useState } from "react";

type User = {
  name: string;
  gender: string;
};

export function Users() {
  // let [users, setUsers] = useState(null); // Ini akan error karena kita diawal setting sebagai null maka berikutnya harus type data yang sama dengan null, tidak bisa diisi dengan type User
  const [users, setUsers] = useState<User[] | null>(null); // dengan begini di masa depan kita bisa ganti Statenya dengan type User

  // Cerita data dari database
  const databaseUsers: User[] = [
    {
      name: "user1",
      gender: "man",
    },
    {
      name: "user2",
      gender: "woman",
    },
    {
      name: "user3",
      gender: "man",
    },
  ];

  /** @IMPORTANT ini contoh error dan fixnya ketika kita berhadapan dengan Optinal Value <X | Y> */
  //   const userContainer = () => {
  //     /**
  //      * Jika optional value mengalami error seperti ini alasannya karena ada kemungkinan dia sebagai undefined atau methodnya tidak cocok,
  //      * jadi gunakan if condition untuk meyakinkan Typescript bahwa pasti type data itu yang akan digunakan.
  //      */
  //     // for (let i = 0; i < users?.length; i++) {} // Ini error

  //     // Dicontoh ini users bisa bernilai null atau User[] maka untuk memastikannya kita bisa gunakan if condition jika users != null
  //     if (users != null) {
  //       return users.map((user) => {
  //         return (
  //           <div className="container user-container">
  //             <p>Name : {user.name}</p>
  //             <p>Gender : {user.gender}</p>
  //           </div>
  //         );
  //       });
  //     }
  //   };

  function toggleUsers() {
    if (users) {
      setUsers(null);
    } else {
      setUsers(databaseUsers);
    }
  }

  return (
    <div className="container">
      <button onClick={toggleUsers}>{users ? "Hide" : "Show"} Users</button>
      {users?.map((user) => {
        return (
          <div className="container user-container">
            <p>Name : {user.name}</p>
            <p>Gender : {user.gender}</p>
          </div>
        );
      })}
    </div>
  );
}
