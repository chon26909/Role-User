import { FC, createContext, useState } from "react";
import { IAuth } from "../types/user";

interface Props {
  children: JSX.Element | JSX.Element[];
}

interface IAuthContext {
  auth: IAuth | undefined;
  setAuth: (value: IAuth) => void;
}

const initailData: IAuth = {
  username: "chon",
  token: "ewewhrtehth",
  roles: [1, 2, 3, 4, 5, 7, 8, 9, 10],
};

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: FC<Props> = ({ children }) => {
  const [auth, setAuth] = useState<IAuth | undefined>(initailData);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
