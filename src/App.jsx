import { connect } from "react-redux";

const App = (props) => {
  console.log(props);
  return <div>App</div>;
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);
