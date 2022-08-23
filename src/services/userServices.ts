import {
  IUsersServices,
  IUserCredentials,
  LoggedUser,
} from "../services/interfaces/UsersServices";

class UserServices implements IUsersServices {
  constructor() {}
  userLogIn({ username, password }: IUserCredentials): LoggedUser {
    let loggedUser = {
      username,
      isLogged: true,
    };

    console.log(loggedUser);
    return loggedUser;
  }
}

export default UserServices;
