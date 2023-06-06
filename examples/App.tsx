import { data } from './assets/data';
import '../dist/style.css';
import './index.less';
import { SourceRender } from './components/SourceRender';

const App = () => {
  return (
    <div id="app" className="min-w-[768px]">
      <div className="w-11/12 mx-auto">
        <div className="mt-12 px-4 overflow-hidden border-0 border-l-4 border-solid border-purple-500 text-lg font-bold">
          <code>
            <p>
              <span className="inline-block px-2 relative">
                <span className="relative text-white z-10">
                  &lt;ReactJsonView /&gt;
                </span>
                <span
                  className="absolute inline-block inset-0 bg-pink-400"
                  style={{
                    transform: 'skewY(-2deg)',
                  }}
                ></span>
              </span>{' '}
              is a react component for displaying serializable data.
            </p>
            <p>
              You can open the repo{' '}
              <a href="https://github.com/HuolalaTech/react-json-view">
                @huolala-tech/react-json-view
              </a>{' '}
              to find how to get it and ⭐️.
            </p>
            <p>Following show the capabilities of it.</p>
          </code>
        </div>

        {data.map((item) => {
          const { originSource, renderSource } = item.getData();
          return (
            <div className="mt-12 last:mb-12">
              <h3>{item.type}</h3>
              <SourceRender
                {...{
                  originSource,
                  renderSource,
                  rjvProps: item.props,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
