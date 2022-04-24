import { ReactNode, useEffect, useState } from "react";
import { User } from "../Models/UserModel";
import { ScreeningContext } from "./ScreeningContext";


interface Props {
  children: ReactNode;
}

export function ScreeningContextProvider({ children }: Props) {
  //localStorage implementation

  const [users, setUsers] = useState<User[]>(() => {
    const saved = localStorage.getItem("userStorage") || "[]";
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });


  const [auth, setAuth] = useState<boolean>(() => {
    const saved = localStorage.getItem("userLogin");
    const initialValue = saved === "true" ? true : false;
    return initialValue;
  });

  const [user_id, setUserId] = useState<number>(() => {
    const saved = localStorage.getItem("userID") || '0';
    const initialValue = JSON.parse(saved);
    return initialValue;
  });



  useEffect(() => {
    localStorage.setItem("userStorage", JSON.stringify(users));
    localStorage.setItem("userLogin", JSON.stringify(auth));
    localStorage.setItem("userID", JSON.stringify(user_id));
  }, [users, auth, user_id]);

  function addUser(user: User) {
    setUsers([...users, user]);
  }
 

  function loginUser() {
    setAuth(true);
  }

  function logoutUser() {
    setAuth(false);
  }

  const [first_name, setFirstName] = useState<string>('');

  function addFirstName(first_name: string) {
    setFirstName(first_name);
  }

  const [last_name, setLastName] = useState<string>('');

  function addLastName(last_name: string) {
    setLastName(last_name);
  }

  const [searched_name, setSearchedName] = useState<string>('');

  function addSearchedName(search_name: string) {
    setSearchedName(search_name);
  }


  function addUserId(userid: number) {
    setUserId(userid);
  }

  return (
    <ScreeningContext.Provider
      value={{
        users,
        addUser,
        auth,
        loginUser,
        logoutUser,
        last_name,
        first_name,
        addFirstName,
        addLastName,
        user_id,
        addUserId,
        searched_name,
        addSearchedName
      }}
    >
      {children}
    </ScreeningContext.Provider>
  );
}