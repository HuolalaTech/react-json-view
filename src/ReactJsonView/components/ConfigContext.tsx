import { PropsWithChildren, createContext, useContext } from 'react';
import { Options } from '../../../types';

const defaultValue: Options = {
  source: null,
  darkMode: false,
  defaultExpand: false,
  rootLabel: '',
  keyCount: 200,
  maxTitleSize: 100,
  copyable: true,
  expandable: true,
  stringEllipse: true
};

const ConfigContext = createContext(defaultValue);

export const ConfigProvider = ({
  children,
  ...props
}: PropsWithChildren<Options>) => {
  return (
    <ConfigContext.Provider value={{ ...defaultValue, ...props }}>
      {children}
    </ConfigContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useConfigInfo = () => {
  const data = useContext(ConfigContext);
  return data;
};
