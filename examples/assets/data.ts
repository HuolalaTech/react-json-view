import json from './big-size.json';

export const data = [
  {
    type: 'Primitive source',

    getData: () => {
      const originSource = 'Hello, @huolala-tech/react-json-view';
      return {
        originSource,
        renderSource: originSource,
      };
    },
  },
  {
    type: 'Normal object source',

    getData: () => {
      const originSource = {
        name: '@huolala-tech/react-json-view',
        contributor: 'wqcstrong',
        description:
          '<ReactJsonView /> is a react component for display json tree, it accepts the valid json object as the source and show them',
      };
      return {
        originSource: JSON.stringify(originSource),
        renderSource: originSource,
      };
    },
  },
  {
    type: 'JSON string',

    getData: () => {
      const originSource = JSON.stringify({
        name: '@huolala-tech/react-json-view',
        contributor: 'wqcstrong',
        description:
          '<ReactJsonView /> is a react component for display json tree, it accepts the valid json object as the source and show them',
      });
      return {
        originSource,
        renderSource: originSource,
      };
    },
  },
  {
    type: 'Null',

    getData: () => {
      const originSource = null;
      return {
        originSource: JSON.stringify(originSource),
        renderSource: originSource,
      };
    },
  },
  {
    type: 'Wrap line',

    getData: () => {
      const originSource = `<!DOCTYPE html>
      <html lang="en">
      <head>
        <script type="module" src="/@vite/client"></script>
        <meta charset="UTF-8" />
      <body>
        <div id="app"></div>
        <script type="module" src="/src/main.ts?t=1686017220566"></script>
      </body>
      </html>`;
      return {
        originSource,
        renderSource: originSource,
      };
    },
  },
  {
    type: 'Indicate expand depth (3)',

    props: {
      defaultExpand: 3,
    },
    getData: () => {
      const originSource = {
        11111111: {
          22222222: {
            3333333: {
              4444444: {
                5555555: 'STOP',
              },
            },
          },
        },
      };
      return {
        originSource: JSON.stringify(originSource),
        renderSource: originSource,
      };
    },
  },
  {
    type: 'Circular-Structure (window)',

    getData: () => {
      return {
        originSource: 'window',
        renderSource: window,
      };
    },
  },
  {
    type: 'Big size source (4.7MB)',

    getData: () => {
      return {
        originSource: '<Big Size JSON>',
        renderSource: json,
      };
    },
  },
];
