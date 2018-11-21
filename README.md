# usePreserve

LocalStorage hook combined with `preserve`!

## Installation

```sh
npm install @ludens-reklame/use-preserve
```

or with yarn

```sh
yarn add @ludens-reklame/use-preserve
```

## Basic usage

```ts
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
```
# use-preserve
