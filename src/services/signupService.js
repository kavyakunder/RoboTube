import axios from "axios";
const signupFunc = ({ email, password, firstName }) => {
  return axios.post("/api/auth/signup", {
    email: email,
    password: password,
    firstName: firstName,
  });
};

export { signupFunc };
