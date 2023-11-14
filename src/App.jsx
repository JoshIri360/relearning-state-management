import { useReducer } from "react";

const UserForm = () => {
  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      first: "",
      last: "",
    }
  );

  return (
    <div>
      <input
        type="text"
        value={state.first}
        onChange={(e) => {
          dispatch({ first: e.target.value });
        }}
      />
      <input
        type="text"
        value={state.last}
        onChange={(e) => {
          dispatch({ last: e.target.value });
        }}
      />
      <div>
        <p>First: {state.first}</p>
        <p>Last: {state.last}</p>
      </div>
    </div>
  );
};

const NameList = () => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_NAME":
          return { ...state, name: action.name };
        case "ADD_NAME":
          return { ...state, names: [...state.names, state.name], name: "" };
        default:
          return state;
      }
    },
    {
      names: [],
      name: "",
    }
  );

  return (
    <div>
      <div>
        <ul>
          {state.names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({
            type: "SET_NAME",
            name: e.target.value,
          })
        }
      />
      <button
        onClick={() =>
          dispatch({
            type: "ADD_NAME",
          })
        }
      >
        ADD NAME
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <UserForm />
      <NameList />
    </div>
  );
};

export default App;
