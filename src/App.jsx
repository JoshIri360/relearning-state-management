import { useState, useMemo, useCallback } from "react";

const SortedList = ({ list, sortFunc }) => {
  console.log("Rendering sorted list");
  const sortedList = useMemo(() => {
    console.log("Running sort");
    return [...list].sort(sortFunc);
  }, [list, sortFunc]);
  return (
    <ul>
      {sortedList.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

const App = () => {
  // Use useMemo when you have a potentially expensive operation
  const [numbers, setNumbers] = useState([10, 20, 30]);
  const total = useMemo(
    () => numbers.reduce((acc, curr) => acc + curr, 0),
    [numbers]
  );
  const [names] = useState(["John", "Gigachad", "Joe", "Ringo"]);
  const sortFunc = useCallback((a, b) => {
    a.localeCompare(b);
  }, []);
  return (
    <>
      <div>Names: {names.join(", ")}</div>
      <SortedList list={names} sortFunc={sortFunc} />
      <button
        onClick={() => {
          const randomNumber = Math.floor(Math.random() * 100);
          console.log("Adding number", randomNumber);
          let newNumbers = [...numbers];
          newNumbers.push(randomNumber);
          setNumbers(newNumbers);
          console.log("Number added", numbers);
        }}
      >
        Add Number
      </button>
      <div>Numbers: {numbers.join(", ")}</div>
      <div>Total {total}</div>
    </>
  );
};

export default App;
