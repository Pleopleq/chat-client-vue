interface IUserCredentials {
  username: string;
  password: string;
}

interface LoggedUser {
  username: string;
  isLogged: boolean;
}

interface IUsersServices {
  userLogIn(userCredentials: IUserCredentials): void;
}

export type { IUsersServices, IUserCredentials, LoggedUser };
