Engligh | [中文](./README_ZH.md)

## @huolala-tech/react-json-view

`<ReactJsonView />` is a React component for displaying JSON data.

The component accepts source data of _string_ type, which means you need to ensure that the data passed in is valid JSON string and can be parsed without errors using the `JSON.parse()` method. Otherwise, the data will be converted to a _string_ type before being processed.

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

const data = JSON.stringify([
  1,
  true,
  "Hello world",
  ["foo", "bar", "baz"],
  {
    name: "@huolala-tech/react-json-view",
    contributor: "wqcstrong",
    description: 'The component accepts source data of *string* type, which means you need to ensure that the data passed in is valid JSON string and can be parsed without errors using the `JSON.parse()` method.',
  },
]);

const App = () => {
  return (
    <div id="app">
      <ReactJsonView
        source={data}
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

Now you should get that after above:

![Main](./screenshots/expand.jpg)

## Config

The default configuration usage:

```tsx
<ReactJsonView
  source={data}
  rootLabel=""
  defaultExpand={false}
  keyCount={200}
  maxTitleSize={100}
/>
```

| Name            | Type              | Default value | Description                                      |
| --------------- | ----------------- | ------------- | ------------------------------------------------ |
| `source`        | `string`          | None          | Origin json string.                              |
| `rootLabel`     | `React.ReactNode` | `""`          | Root node's label.                               |
| `defaultExpand` | `boolean`         | `false`       | Whether expand property panel.                   |
| `keyCount`      | `number / "all"`  | `200`         | `ReactJsonView` supports lazily loading more properties. The parameter indicates how many properties to show at a time, and you can pass `"all"` to show all properties. |
| `maxTitleSize`  | `number`          | `100`         | The max length of abbreviated title in collapse. |

## License

[MIT](https://opensource.org/licenses/MIT)
