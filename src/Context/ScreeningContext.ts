import { User } from "../Models/UserModel";
import { createContext } from "react";

export interface ScreeningContextModel {
  users: User[];
  first_name: string;
  last_name: string;
  searched_name: string;
  user_id: number;
  auth: boolean;
  addUser: (user: User) => void;
  addFirstName: (first_name: string) => void;
  addLastName: (last_name: string) => void;
  addSearchedName: (search_name: string) => void;
  addUserId: (userid: number) => void;
  loginUser: () => void;
  logoutUser: () => void;
}

const defaultValue: ScreeningContextModel = {
  users: [],
  first_name: "",
  last_name: "",
  searched_name: "",
  user_id: 0,
  auth: false,
  addUser: () => {},
  addFirstName: () => {},
  addLastName: () => {},
  addSearchedName: () => {},
  addUserId: () => {},
  loginUser: () => {},
  logoutUser: () => {},
};

export const ScreeningContext =
  createContext<ScreeningContextModel>(defaultValue);
