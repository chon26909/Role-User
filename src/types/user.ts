export interface IUser {
  username: string;
  email: string;
  roles: number[];
}

export interface IAuth {
  username: IUser["username"];
  token: string;
  roles: IUser["roles"];
}
