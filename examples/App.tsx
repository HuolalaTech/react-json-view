import ReactJsonView from '../dist/index';
import '../dist/style.css';
import json from './assets/data.json';

const data = [
  {
    type: 'Primitive',
    data: 'Hello, @huolala-tech/react-json-view',
  },
  {
    type: 'Normal',
    data: {
      name: '@huolala-tech/react-json-view',
      contributor: 'wqcstrong',
      description:
        '<ReactJsonView /> is a react component for display json tree, it accepts the valid json object as the source and show them',
    },
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
            <ReactJsonView
              key={item.type}
              source={item.data}
              keyCount={200}
              defaultExpand={2}
              maxTitleSize={100}
            />
          </>
        );
      })}
    </div>
  );
};

export default App;
