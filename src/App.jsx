import { useRef, useEffect, useState } from "react";

const App = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const idRef = useRef(1);

  const [names, setNames] = useState([
    { name: "John", id: idRef.current++ },
    { name: "Mary", id: idRef.current++ },
  ]);

  const addName = () => {
    const name = inputRef.current.value;
    setNames([...names, { name, id: idRef.current++ }]);
    inputRef.current.value = "";
  };

  return (
    <div>
      Input: <input ref={inputRef} type="text" />
      <button
        onClick={() => {
          addName();
        }}
      >
        Add name
      </button>
      <ul>
        {names.map((name) => (
          <li key={name.id}>{`${name.id} ${name.name}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
