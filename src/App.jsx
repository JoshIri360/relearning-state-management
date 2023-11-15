import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";

// useEffect is a hook that allows you to perform side effects in a function component
// useEffect is called after the component is rendered
// useEffect is called after every render
// useEffect should be used for side effects
// useEffect should not be used for rendering
// useEffect should not be used for data fetching except for the first time

const StopWatch = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((time) => {
        console.log(time);
        return time + 1;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div>Time: {time}</div>;
};

const App = () => {
  const [names, setNames] = useState([]);

  // An example of using useEffect for data fetching is shown below
  useEffect(() => {
    fetch("./names.json")
      .then((response) => response.json())
      .then((data) => setNames(data));
  }, []);

  const [selectedNameDetails, setSelectedNameDetails] = useState(null);

  const onSelectName = (name) => {
    fetch(`./${name}.json`)
      .then((response) => response.json())
      .then((data) => setSelectedNameDetails(data));
  };

  return (
    <div className="text-xl flex flex-col items-center justify-center w-screen h-screen">
      <StopWatch />
      <div className="flex gap-3">
        {names.map((name, index) => {
          return (
            <div key={index}>
              <button
                onClick={() => {
                  onSelectName(name);
                }}
              >
                {name}
              </button>
            </div>
          );
        })}
      </div>
      <div>{JSON.stringify(selectedNameDetails)}</div>
    </div>
  );
};

export default App;
