import { Card } from '$/common/components/card';
import { useState } from 'react';
import { Button } from './button';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  return (
    <Card className="border-primary-500 flex w-2/3 flex-col items-center gap-8">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{count}</p>
      <div className="flex gap-2">
        <Button onClick={() => setCount(count - 1)}>➖ Decrement</Button>
        <Button onClick={() => setCount(0)}>🔁 Reset</Button>
        <Button onClick={() => setCount(count + 1)}>➕ Increment</Button>
      </div>
      <form className="flex items-center gap-2" onSubmit={(e) => e.preventDefault()}>
        <input
          className="ring-primary-600 focus:border-primary-800 rounded border border-slate-500 px-4 py-2 outline-none focus:ring-2"
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.valueAsNumber)}
        />
        <Button onClick={() => setCount(inputValue)}>Update Counter</Button>
      </form>
    </Card>
  );
};
