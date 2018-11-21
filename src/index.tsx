import { useState, useEffect } from 'react';
import preserve from '@ludens-reklame/preserve';

export default function usePreserve(key: string, initialData: any): [any, any] {
  if (!key) {
    throw new Error(`'usePreserve' needs a key!`);
  }

  if (initialData === undefined || initialData === null) {
    throw new Error(
      `usePreserve uses 'useState' and is therefor in need of some initial data.`
    );
  }

  const item = preserve(key);
  const [state, setState] = useState(initialData);

  useEffect(
    () => {
      item.subscribe(nextData => {
        setState(nextData);
      });
    },
    [state]
  );

  function setStorage(nextData: any) {
    item.set(nextData);
  }

  const storage = item.get() ? item.get() : state;

  return [storage, setStorage];
}
