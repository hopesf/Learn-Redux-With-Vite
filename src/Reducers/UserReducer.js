import { UPDATE_USER } from "../Actions/UserActions";

export const UserReducer = (state = "", { type, payload }) => {
  switch (type) {
    case UPDATE_USER:
      return payload.user;

    default:
      return state;
  }
};
