import json from './big-size.json';

export const data = [
  {
    type: 'Primitive string',
    getData: () => {
      const originSource = 'Hello, @huolala-tech/react-json-view';
      return {
        originSource,
        renderSource: originSource
      };
    }
  },
  {
    type: 'Number string',
    getData: () => {
      const originSource = '1234567890';
      return {
        originSource,
        renderSource: originSource
      };
    }
  },
  {
    type: 'Number value',
    getData: () => {
      const originSource = 1234567890;
      return {
        originSource,
        renderSource: originSource
      };
    }
  },
  {
    type: 'Normal object source',
    getData: () => {
      const originSource = {
        name: '@huolala-tech/react-json-view',
        contributor: 'wqcstrong',
        public: true,
        dependencyCount: 1,
        preferGlobal: null,
        description:
          '<ReactJsonView /> is a react component for display serializable tree'
      };
      return {
        originSource: JSON.stringify(originSource),
        renderSource: originSource
      };
    }
  },
  {
    type: 'JSON string',
    getData: () => {
      const originSource = JSON.stringify({
        name: '@huolala-tech/react-json-view',
        contributor: 'wqcstrong',
        public: true,
        dependencyCount: 1,
        preferGlobal: null,
        description:
          '<ReactJsonView /> is a react component for display serializable tree'
      });
      return {
        originSource,
        renderSource: originSource
      };
    }
  },
  {
    type: 'Null',
    getData: () => {
      const originSource = null;
      return {
        originSource: JSON.stringify(originSource),
        renderSource: originSource
      };
    }
  },
  {
    type: 'Undefined',
    getData: () => {
      const originSource = undefined;
      return {
        originSource: 'undefined',
        renderSource: originSource
      };
    }
  },
  {
    type: 'Ellipse string',
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
        renderSource: originSource
      };
    }
  },
  {
    type: 'Show all text',
    props: {
      stringEllipse: false
    },
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
        renderSource: originSource
      };
    }
  },
  {
    type: 'Indicate expand depth (3)',
    props: {
      defaultExpand: 3
    },
    getData: () => {
      const originSource = {
        11111111: {
          22222222: {
            3333333: {
              4444444: {
                5555555: 'STOP'
              }
            }
          }
        }
      };
      return {
        originSource: JSON.stringify(originSource),
        renderSource: originSource
      };
    }
  },
  {
    type: 'Circular-Structure (window)',
    getData: () => {
      return {
        originSource: 'window',
        renderSource: window
      };
    }
  },
  {
    type: 'Lazy load big size source (12 MB)',
    getData: () => {
      return {
        originSource: '<Big Size JSON>',
        renderSource: json
      };
    }
  },
  {
    type: 'Disable copy and disable expand',
    props: {
      copyable: false,
      expandable: false
    },
    getData: () => {
      const originSource = {
        11111111: {
          22222222: {
            3333333: {
              4444444: {
                5555555: 'STOP'
              }
            }
          }
        }
      };
      return {
        originSource: JSON.stringify(originSource),
        renderSource: originSource
      };
    }
  }
];
