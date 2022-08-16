interface IUserCredentials {
  username: string;
  password: string;
}

interface IUsersServices {
  userLogIn(userCredentials: IUserCredentials): string;
}

export type { IUsersServices, IUserCredentials };
