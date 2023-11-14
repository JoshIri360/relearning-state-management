import { useState, useMemo } from "react";

const App = () => {
  // Use useMemo when you have a potentially expensive operation
  const [numbers] = useState([10, 20, 30]);

  const total = useMemo(
    () => numbers.reduce((acc, curr) => acc + curr, 0),
    [numbers]
  );

  return <div>Total {total}</div>;
};

export default App;
