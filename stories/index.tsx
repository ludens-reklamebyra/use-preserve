import * as React from 'react';
import { storiesOf } from '@storybook/react';
import usePreserve from '../src/index';

function App() {
  const [storageCounter, setStorageCounter] = usePreserve('myKey', 0);

  return (
    <>
      <h1>{storageCounter}</h1>
      <button onClick={() => setStorageCounter(storageCounter + 1)}>
        Increment
      </button>
      <button onClick={() => setStorageCounter(storageCounter - 1)}>
        Decrement
      </button>
    </>
  );
}

storiesOf('Layout', module).add('Basic usage', () => <App />);
