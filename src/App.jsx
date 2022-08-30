import { useEffect } from "react";
import { connect } from "react-redux";
import { GetUser, UpdateUserAction } from "./Actions/UserActions";

const App = ({ user, UpdateUserAction, GetUser }) => {
  const handleBtnClick = () => {
    UpdateUserAction("Selim Coder");
  };

  useEffect(() => {
    GetUser();
  }, []);

  return (
    <div>
      <p>{user}</p>
      <button onClick={handleBtnClick}>İsmi Değiştir</button>
    </div>
  );
};

const reduxProps = (state) => {
  return state;
};

const changeDispatch = {
  UpdateUserAction,
  GetUser,
};

export default connect(reduxProps, changeDispatch)(App);
