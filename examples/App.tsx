import ReactJsonView from '../dist/index';
import '../dist/style.css';
import json from './assets/data.json?raw';

const data = JSON.stringify([
  1,
  true,
  'Hello world',
  ['foo', 'bar', 'baz'],
  {
    name: '@huolala-tech/react-json-view',
    contributor: 'wqcstrong',
    description:
      'The component accepts source data of string type, which means you need to ensure that the data passed in is valid JSON string and can be parsed without errors using the JSON.parse() method.',
  },
]);

const App = () => {
  return (
    <div id="app">
      <ReactJsonView
        source={data || json}
        rootLabel="Response data"
        keyCount={200}
        defaultExpand={false}
        maxTitleSize={100}
      />
    </div>
  );
};

export default App;