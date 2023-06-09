Engligh | [中文](./README_CN.md)

## @huolala-tech/react-json-view

`<ReactJsonView />` is a React component for displaying serializable data.

## Install

```bash
# Yarn
yarn add @huolala-tech/react-json-view

# NPM
npm install @huolala-tech/react-json-view

# pnpm
pnpm install @huolala-tech/react-json-view
```

## Usage

See [examples](./examples/)

```tsx
imoprt React from 'react';
import ReactDOM from 'react-dom';

import ReactJsonView from '@huolala-tech/react-json-view';
import '@huolala-tech/react-json-view/dist/style.css';

const data = [1,2,3,4]

const App = () => {
  return (
    <div id="app">
      <ReactJsonView
        source={data}
        darkMode={false}
        rootLabel="Response data"
        keyCount={200}
        defaultExpand={false}
        maxTitleSize={100}
      />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
)
```

## Config

The default configuration usage:

```tsx
<ReactJsonView
  source={data}
  darkMode={false}
  rootLabel=""
  defaultExpand={false}
  keyCount={200}
  maxTitleSize={100}
/>
```

| Name            | Type               | Default value | Description                                                  |
| --------------- | ------------------ | ------------- | ------------------------------------------------------------ |
| `source`        | `object`           | None          | Origin serializable data.                                    |
| `darkMode`      | `boolean`          | `false`       | Indicate whether enable dark mode.                           |
| `rootLabel`     | `React.ReactNode`  | `""`          | Root node's label.                                           |
| `defaultExpand` | `boolean / number` | `false`       | Whether expand property panel. Expand at a particular depth if you pass a integer value. |
| `keyCount`      | `number / "all"`   | `200`         | `ReactJsonView` supports lazily loading more properties. The parameter indicates how many properties to show at a time, and you can pass `"all"` to show all properties. |
| `maxTitleSize`  | `number`           | `100`         | The max length of abbreviated title in collapse.             |

## License

[MIT](https://opensource.org/licenses/MIT)
