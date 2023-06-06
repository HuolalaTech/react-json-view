import ReactJsonView from '../dist/index';
import '../dist/style.css';
import json from './assets/data.json';

const data = [
  {
    type: 'Primitive source',
    data: 'Hello, @huolala-tech/react-json-view',
  },
  {
    type: 'Normal object source',
    data: {
      name: '@huolala-tech/react-json-view',
      contributor: 'wqcstrong',
      description:
        '<ReactJsonView /> is a react component for display json tree, it accepts the valid json object as the source and show them',
    },
  },
  {
    type: 'JSON string',
    data: JSON.stringify({
      name: '@huolala-tech/react-json-view',
      contributor: 'wqcstrong',
      description:
        '<ReactJsonView /> is a react component for display json tree, it accepts the valid json object as the source and show them',
    }),
  },
  {
    type: 'Null source',
    data: null,
  },
  {
    type: 'Wrap line',
    boxStyle: { width: 300 },
    data: `<!DOCTYPE html>\n<html lang="en">\n\n<head>\n  \x3Cscript type="module" src="/@vite/client">\x3C/script>\n\n  <meta charset="UTF-8" />\n  <link rel="icon" type="image/svg+xml" href="/vite.svg" />\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n  <title>Vite & TS</title>\n  \x3C!-- 调试本地最新SDK -->\n  \x3Cscript src="http://local.file/page-spy-sdk/index.min.js">\x3C/script>\n  \x3C!-- \x3Cscript src="https://local.file/page-spy-sdk/index.min.js">\x3C/script> -->\n\n  \x3C!-- 调试开源版本：注意可能要更新镜像并重启容器 -->\n  \x3C!-- \x3Cscript crossorigin="anonymous" src="http://localhost:6752/page-spy/index.min.js">\x3C/script> -->\n\n  \x3Cscript>\n    window.$pageSpy = new PageSpy({\n      // 公司内网服务：不一定最新\n      // api: 'page-spy-web-v.huolala.work',\n\n      // 开源版本服务：\n      api: "localhost:6752",\n\n      project: 'test-spy'\n    })\n    // window.$pageSpy = new PageSpy({\n    //   clientOrigin: 'https://page-spy-web-v.huolala.work',\n    //   project: "test-spy"\n    // });\n  \x3C/script>\n</head>\n\n<body>\n  <div id="app">\n    <div>\n      <a href="https://vitejs.dev" target="_blank">\n        <img src="/vite.svg" class="logo" alt="Vite logo" />\n      </a>\n      <a href="https://www.typescriptlang.org/" target="_blank">\n        <img src="/typescript.svg" class="logo vanilla" alt="TypeScript logo" />\n      </a>\n      <h1>Vite + TypeScript</h1>\n      <div class="flex-center">\n        <div class="card">\n          <button id="large-data" type="button">Large data</button>\n        </div>\n        <div class="card">\n          <button id="console" type="button">Console</button>\n        </div>\n        <div class="card">\n          <button id="xhr" type="button">Network (XHR)</button>\n        </div>\n        <div class="card">\n          <button id="fetch" type="button">Network (fetch)</button>\n        </div>\n        <div class="card">\n          <button id="beacon" type="button">Network (beacon)</button>\n        </div>\n      </div>\n      <p class="read-the-docs">\n        Click on the Vite and TypeScript logos to learn more\n      </p>\n      <div class="inner">\n        <iframe src="/" width="100%" height="300"></iframe>\n      </div>\n    </div>\n  </div>\n  \x3Cscript type="module" src="/src/main.ts?t=1686017220566">\x3C/script>\n</body>\n\n</html>\n`,
  },
  {
    type: 'Indicate expand depth (3)',
    data: {
      foo: {
        name: 'foo',
        child: {
          bar: {
            name: 'bar',
            child: {
              name: 'baz',
            },
          },
        },
      },
    },
  },
  {
    type: 'Self-Reference (window)',
    data: window,
  },
  { type: 'Big Size', data: json },
];

const App = () => {
  return (
    <div id="app">
      {data.map((item) => {
        return (
          <>
            <h2>{item.type}</h2>
            <div className="box" style={item.boxStyle}>
              <ReactJsonView
                key={item.type}
                source={item.data}
                keyCount={200}
                defaultExpand={2}
                maxTitleSize={100}
              />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default App;
