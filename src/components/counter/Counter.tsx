import { FC, useState } from 'react';


export const Counter: FC = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((prevCount) => {
      return prevCount ? prevCount - 1 : 0;
    });
  };

  return (
    <div className="flex items-center justify-between w-48">
      <button
        className="btn btn-md text-2xl"
        type="button"
        data-testid="plus"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        +
      </button>
      <p className="text-2xl font-bold p-2" data-testid="countId">{count}</p>
      <button
        name="minus"
        className="btn btn-md text-2xl"
        type="button"
        data-testid="less"
        onClick={() => decrement()}
      >
        -
      </button>
    </div>
  );
};
