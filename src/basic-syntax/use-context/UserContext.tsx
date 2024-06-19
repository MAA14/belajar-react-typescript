import React, { createContext, useState } from "react";

/**
 * @FLOW
 * 1. UseContext hook memungkinkan Children element dapat mengakses value dari Context.Provider
 * 2. Value Context.Provider = Value pada method createContext()
 * 3. Value tidak hanya berisi function atau object, tapi juga bisa berisi hook seperti UseState
 */

/**
 * @Step1
 * Membuat Context-nya terlebih dahulu dengan method createContext()
 * 1. Karena kita ingin membuat fitur login dan logout yang akan mengupdate data user, maka kita butuh UseState untuk menyimpan data User
 * 2. Oleh karena itu kita akan membuat type untuk User dan UseState hook untuk User
 */

type User = {
  name: string;
  email: string;
};

// Membuat UserContext Type yang akan digunakan saat inisialisasi createContext()
type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

// Membuat dan Expoort UserContext dengan huruf awal Kapital karena ini akan jadi component
export const UserContext = createContext<UserContextType | null>(null); // value = state awal

/**
 * @Step2
 * Membuat component UserContextProvider yang akan mereturn component UserContext.Provider
 * -- UserContext.Provider memiliki atribut value yang tipe datanya adalah UserContextType
 */
type UserContextProviderProps = {
  children: React.ReactNode;
};

export function UserContextProvider({ children }: UserContextProviderProps) {
  // Membuat UseState hook didalam component supaya bisa ke export dan perubahan datanya dapat diakses
  const [user, setUser] = useState<User | null>(null);

  // Memasukkan user dan setUser sebagai value dari UserContext.Provider
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
