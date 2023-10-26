[Engligh](./README.md) | 中文

## @huolala-tech/react-json-view

`<ReactJsonView />` 是一个用于展示可序列化数据的 React 组件。

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

const data = [1, 2, 3, 4];

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

## 配置

默认配置下的使用方式:

```tsx
<ReactJsonView
  source={data}
  darkMode={false}
  rootLabel=""
  defaultExpand={false}
  keyCount={200}
  maxTitleSize={100}
  copyable={true}
  expandable={true}
/>
```

| 配置项           | 类型               | 默认值        | 释义                    |
| --------------- | ----------------- | ------------- | ---------------------- |
| `source`        | `string`          | 无默认值       | 可序列化的数据。             |
| `darkMode` | `boolean` | `false` | 是否启用暗色模式 |
| `rootLabel`     | `React.ReactNode` | `""`          | 根节点的标题名称          |
| `defaultExpand` | `boolean / number` | `false`       | 是否展开面板。传入整数时是指定展开的层级。 |
| `keyCount`      | `number / "all"`  | `200`         | `ReactJsonView` 支持延迟加载更多属性。 该参数表示一次显示多少个属性，您可以传递 `"all"` 以显示所有属性。 |
| `maxTitleSize`  | `number`          | `100`         | 折叠时缩写标题的最大长度。 |
| `copyable`      | `boolean`          | `true`        | 是否展示复制功能                       |
| `expandable`    | `boolean`          | `true`        | 是否支持展开功能                       |

## License

[MIT](https://opensource.org/licenses/MIT)
