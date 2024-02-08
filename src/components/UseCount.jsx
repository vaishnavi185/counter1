import { useState } from 'react';

export default function UseCount() {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count + 1);
  };

  const subOne = () => {
    setCount(count - 1);
  };

  const Resets = () => {
    setCount(0);
  };

  return { count, Resets, addOne, subOne };
}
