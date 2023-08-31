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
                    transform: 'skewY(-2deg)'
                  }}
                ></span>
              </span>{' '}
              is a react component for displaying serializable data.
            </p>
            <p>
              You can open the Github repo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                style={{ transform: 'translateY(10px)', marginInline: 6 }}
              >
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                />
              </svg>
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
                  rjvProps: item.props
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
