import axios from "axios";
export const UPDATE_USER = "UPDATE_USER";
export const HANDLE_UPDATE_ERROR = "HANDLE_UPDATE_ERROR";

export const UpdateUserAction = (newUser) => {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser,
    },
  };
};

export const HandleUpdateError = () => {
  return {
    type: HANDLE_UPDATE_ERROR,
    payload: {
      error: "HATA!!!",
    },
  };
};

export const GetUser = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then(({ data }) => dispatch(UpdateUserAction(data.name)))
      .catch((err) => dispatch(HandleUpdateError()));
  };
};
