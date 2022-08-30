import { connect } from "react-redux";
import { UpdateUserAction } from "./Actions/UserActions";

const App = ({ user, UpdateUserAction }) => {
  const handleBtnClick = () => {
    UpdateUserAction("Selim Coder");
  };

  return (
    <div>
      <p>{user}</p>
      <button onClick={handleBtnClick}>İsmi Değiştir</button>
    </div>
  );
};

const reduxProps = (state, props) => {
  console.log(props);
  return state;
};

const changeDispatch = {
  UpdateUserAction,
};

export default connect(reduxProps, changeDispatch)(App);
