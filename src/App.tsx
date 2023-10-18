import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./App.css";
import { useReducer } from "react";

//1. Create a initialState
const initialState = {
  fromLanguage: "auto",
  toLanguage: "en",
  fromText: "",
  result: "",
  loading: false,
};

//2. Create a reducer
const reducer = (state, action) => {
  const { type } = action;

  if (type === "INTERCHANGE_LANGUAGES") {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
    };
  }

  return state;
};

const App = () => {
  //3. Call the useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="App">
        <h1>Google Translate</h1>
      </div>
    </>
  );
};

export default App;
