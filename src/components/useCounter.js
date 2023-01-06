import { useState } from "react";
function useCounter() {
  let initialValue = 0;
  let initialCount = 0;

  const [count, setCount] = useState(initialValue);
  const increment = () => {
    setCount(Number(count) + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const reset = () => {
    setCount(initialValue);
  };
  const setValue = (e) => {
    let inputText = e.target.value;
    initialCount = setCount(inputText);
  };

  return [count, increment, decrement, reset, setValue];
}
export default useCounter;
