[Engligh](./README.md) | 中文

## @huolala-tech/react-json-view

`<ReactJsonView />` 是一个用于展示 JSON 数据的 React 组件。

该组件接受 `string` 类型的源数据，这意味着你需要确保传入的数据是有效的 JSON 字符串，并且可以使用 `JSON.parse()` 方法正确解析。否则，数据将在被处理之前转换为 `string` 类型。

## 安装

```bash
# Yarn
yarn add @huolala-tech/react-json-view

# NPM
npm install @huolala-tech/react-json-view

# pnpm
pnpm install @huolala-tech/react-json-view
```

## 使用方式

查看 [示例](./examples/)

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

此时你应该可以看到如下界面:

![Main](/screenshots/expand.jpg)

## 配置

默认配置下的使用方式:

```tsx
<ReactJsonView
  source={data}
  rootLabel=""
  defaultExpand={false}
  keyCount={200}
  maxTitleSize={100}
/>
```

| 配置项  | 类型            | 默认值 | 释义                                |
| --------------- | ----------------- | ------------- | ------------------------------------------------ |
| `source`        | `string`          | 无默认值       | JSON 数据。                      |
| `rootLabel`     | `React.ReactNode` | `""`          | 根节点的标题名称                          |
| `defaultExpand` | `boolean`         | `false`       | 是否展开面板               |
| `keyCount`      | `number / "all"`        | `200`                                            | `ReactJsonView` 支持延迟加载更多属性。 该参数表示一次显示多少个属性，您可以传递 `"all"` 以显示所有属性。 |
| `maxTitleSize`  | `number`          | `100`         | 折叠时缩写标题的最大长度。 |

## License

[MIT](https://opensource.org/licenses/MIT)
