/**
 * @PENGERTIAN
 * 1. UseReducer mirip seperti UseState dia akan mentrigger re-rendering
 * 2. UseReducer untuk menyimpan State (data) yang membutuhkan logic complex
 * 3. UseState hanya dapat mengupdate sebuah State (data) dengan setState(value) sedangkan logicnya berada di method terpisah, sedangkan UseReducer logicnya dan updatenya berada di satu method (function reducer)
 * 4. UseReducer biasanya digunakan jika kita memiliki State yang ingin diberi logic cukup complex, seperti update/menambahkan properties object dengan if condition
 */

/**
 * @Step1
 * Import dulu methodnya
 */
import { useReducer, useState } from "react";

/**
 * @Step2
 * Buat initial state atau state awal, jika pada UseState maka mirip dengan value awal pada fungsi useState(value)
 */
type User = {
  name: string;
  gender: string;
  role: "admin" | "member";
};
const initialUserState = {} as User;

/**
 * @Step3
 * Buat function reducer-nya disinilah letak Logicnya
 * -- reducer function harus menerima 2 parameter yaitu (state,action)
 * -- @param state berisi object initialState yang kita buat sebelumnya (automatis diisi oleh React pada saat menginisialisasi useReducer)
 * -- @param action best practicenya diisi dengan object {type: string, payload: any) | usahakan jangan menggunakan any
 *      -- type merupakan status atau kondisi yang ingin dilakukan, misal {type: "update user"} atau {type: "increment"}
 *      -- payload merupakan data tambahan yang diperlukan oleh Logic kita pada fungsi reducer
 * -- @returns fungsi reducer harus selalu mereturn sebuah data atau Object yang memiliki type data sama dengan type State nya, karena return Object itulah yang akan menjadi state berikutnya
 */
type PayloadUser = {
  user: User;
  changeData?: {
    name?: string;
    gender?: string;
    role?: "admin" | "member";
  };
};

type ActionType = {
  type: string;
  payload: PayloadUser;
};

/** @IMPORTANT ingat untuk memastikan bahwa kita sudah menentukan return type nya, : User */
function reducerUser(state: User, action: ActionType): User {
  // Kenapa make ternary operator satu (condition ? true : false) bukan 2 (condition ?? false) ?, karena kalo make 2 dia bakalan kena true si "" nya dari formInput
  const dataUpdate = action.payload.changeData;
  const name = dataUpdate?.name;
  const gender = dataUpdate?.gender;
  const role = dataUpdate?.role;

  switch (action.type) {
    // Menambah = tidak null
    case "create user":
      return {
        name: name ? name : state.name,
        gender: gender ? gender : state.gender,
        role: role ? role : state.role,
      } as User;

    // Update data
    case "update user":
      return {
        name: name ? name : state.name,
        gender: gender ? gender : state.gender,
        role: role ? role : state.role,
      } as User;

    // Menghapus User = membuat User jadi kosong
    case "delete user":
      return initialUserState;

    default:
      return state;
  }
}

/**
 * @Step4
 * Implementasikan useReducer didalam Component
 */
export function FormUserWithReducer() {
  /**
   * @QnA tentang useReducer()
   * 1. Apa aja value dari useReducer?
   *    -- (function reducer(state,action), initializeState)
   * 2. Apa itu initializeState?
   *    -- itu adalah Object atau data yang akan dijadikan sebagai state pertama
   *
   * @QnA tentang [state, dispatch]
   * 1. Apa itu state?
   *    -- itu adalah tempat kita menyimpan data dan mengambilnya
   * 2. Apa itu dispatch?
   *    -- itu adalah fungsi untuk mengupdate data state, dengan parameter haruslah data ber-type sama dengan action
   *    -- contoh dispatch({type: "update user", payload: {user: userState, changeData: {name: "nama baru"}}})
   *    -- dispatch itulah yang kita gunakan untuk mengirim data Action ke function reducer
   *    -- lalu function reducer yang akan menghandle logic untuk update datanya
   * */
  const [userState, userDispatch] = useReducer(reducerUser, initialUserState);

  // Ini cuman tambahan aja
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // console.log("Current Target log : ", e.currentTarget);
    // console.log("Target log : ", e.target);

    const formElement = new FormData(e.currentTarget); // Buat object FormData biar bisa make getter dan setter untuk inputnya
    const typeInput = formElement.get("type") as string; // stringnya diisi sesuai atribut name pada input
    // console.log(typeInput);

    // lempar error kalo typenya tidak sesuai
    if (
      typeInput != "create user" &&
      typeInput != "update user" &&
      typeInput != "delete user"
    ) {
      setError("Error Type tidak sesuai kriteria");
      return;
    }

    // Kalo ada orang iseng lempar error
    const roleInput = formElement.get("role");
    if (roleInput != "admin" && roleInput != "member") {
      setError(
        "Heyyy jangan lakukan hal yang macem-macem kamu yaa, rolenya cuman ada 'admin' dan 'member' doang"
      );
      return;
    }

    // Kalo typenya dh sesuai maka update statenya dengan dispatch
    // console.log(formElement.get("name") === "" ? "true" : "false");
    // console.log(formElement.get("gender"));
    // console.log(formElement.get("role"));
    userDispatch({
      type: typeInput,
      payload: {
        user: userState,
        changeData: {
          name: formElement.get("name") as string,
          gender: formElement.get("gender") as string,
          role: formElement.get("role") as "admin" | "member",
        },
      },
    });

    // Success
    setError(null);
    console.log(userState);
    return;
  }

  return (
    <div className="container">
      <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
        <div className="input-container">
          <label htmlFor="type">Type :</label>
          <select name="type" id="type" className="input">
            <option value="create user">create user</option>
            <option value="update user">update user</option>
            <option value="delete user">delete user</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="name">Name :</label>
          <input type="text" name="name" id="name" className="input" />
        </div>
        <div className="input-container">
          <label htmlFor="gender">Gender :</label>
          <input type="text" name="gender" id="gender" className="input" />
        </div>
        <div className="input-container">
          <label htmlFor="role">Role :</label>
          <select name="role" id="role" className="input">
            <option value="admin">admin</option>
            <option value="member">member</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>{error ?? ""}</p>
      <p>
        {userState === initialUserState
          ? "There is no User this time"
          : "Here is user description :"}
      </p>
      <p>
        {!(userState === initialUserState) ? `Name : ${userState.name}` : ""}
      </p>
      <p>
        {!(userState === initialUserState)
          ? `Gender : ${userState.gender}`
          : ""}
      </p>
      <p>
        {!(userState === initialUserState) ? `Role : ${userState.role}` : ""}
      </p>
    </div>
  );
}
