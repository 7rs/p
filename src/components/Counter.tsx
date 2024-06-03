import { useState } from "react";

export function Counter() {
  const [count, increaseCount] = useState(0);

  const buttons = [
    { name: "Increase", func: () => increaseCount(count + 1) },
    { name: "Reset", func: () => increaseCount(0) },
  ].map((d) => (
    <button className="p-1 rounded-md bg-slate-200 hover:bg-slate-400 w-32" onClick={d.func}>
      {d.name}
    </button>
  ));

  return (
    <article>
      <p className="text-2xl text-center m-4">{String(count)}</p>
      <div className="flex gap-8 justify-center">
        {buttons}
      </div>
    </article>
  );
}
