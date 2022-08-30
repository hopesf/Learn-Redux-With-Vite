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
  return state;
};

const changeDispatch = {
  UpdateUserAction,
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  console.log(propsFromState);
  console.log(propsFromDispatch);
  console.log(ownProps);
  return {};
};

export default connect(reduxProps, changeDispatch, mergeProps)(App);
