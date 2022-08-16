import {
  IUsersServices,
  IUserCredentials,
} from "../services/interfaces/UsersServices";

class UserServices implements IUsersServices {
  constructor() {}
  userLogIn({ username, password }: IUserCredentials): string {
    console.log(username, password);
    return "logged";
  }
}

export default UserServices;
