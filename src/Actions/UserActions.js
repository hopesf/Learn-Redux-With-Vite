export const UPDATE_USER = "UPDATE_USER";

export const UpdateUserAction = (newUser) => {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser,
    },
  };
};
