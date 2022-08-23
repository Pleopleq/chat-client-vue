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
      password,
      isLogged: true,
    };

    fetch("http://localhost:3002/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loggedUser),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error:", error);
      });
    return loggedUser;
  }
}

export default UserServices;
