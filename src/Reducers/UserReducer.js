import { UPDATE_USER, HANDLE_UPDATE_ERROR } from "../Actions/UserActions";

export const UserReducer = (state = "", { type, payload }) => {
  switch (type) {
    case UPDATE_USER:
      return payload.user;
    case HANDLE_UPDATE_ERROR:
      return payload.error;
    default:
      return state;
  }
};
