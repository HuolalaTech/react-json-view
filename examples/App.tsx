import { data } from './assets/data';
import '../dist/style.css';
import './index.less';
import { SourceRender } from './components/SourceRender';
import { useEffect, useState } from 'react';

const App = () => {
  const [mode, setMode] = useState(localStorage.themeMode);
  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.themeMode = mode;
  }, [mode]);

  return (
    <div id="app" className="min-w-[768px]">
      <div className="w-11/12 mx-auto">
        <div className="mt-12 px-4 overflow-hidden border-0 border-l-4 border-solid border-purple-500 text-lg font-bold">
          <code>
            <p>
              <span className="inline-block px-2 relative">
                <span className="relative text-slate-100 z-10">
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
              <a
                href="https://github.com/HuolalaTech/react-json-view"
                className="text-purple-500"
              >
                @huolala-tech/react-json-view
              </a>{' '}
              to find how to get it and ⭐️.
            </p>
            <p>Following show the capabilities of it.</p>
          </code>
        </div>

        {/* Toggle Mode */}
        <div className="flex justify-end items-center space-x-4">
          <div>
            <label htmlFor="light">Light</label>
            <input
              type="radio"
              name="themeMode"
              id="light"
              value="light"
              checked={mode === 'light'}
              onChange={(e) => {
                if (e.target.checked) {
                  setMode('light');
                }
              }}
            />
          </div>
          <div>
            <label htmlFor="dark">Dark</label>
            <input
              type="radio"
              name="themeMode"
              id="dark"
              value="dark"
              checked={mode === 'dark'}
              onChange={(e) => {
                if (e.target.checked) {
                  setMode('dark');
                }
              }}
            />
          </div>
        </div>

        {data.map((item) => {
          const { originSource, renderSource } = item.getData();
          return (
            <div className="mt-12 last:mb-12" key={item.type}>
              <h3>{item.type}</h3>
              <SourceRender
                {...{
                  darkMode: mode === 'dark',
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
