import { memo } from 'react';
import './index.less';
import { Options } from '../../types';
import { ConfigProvider, useConfigInfo } from './components/ConfigContext';
import JsonNode from './components/JsonNode';
import { isString } from '../utils';

const InitJsonNode = () => {
  const { source, darkMode, rootLabel } = useConfigInfo();
  let data: Options['source'] = source;
  if (isString(source)) {
    try {
      data = JSON.parse(source);
    } catch (e) {
      //
    }
  }
  return (
    <div data-dark-mode={darkMode}>
      <JsonNode label={rootLabel} source={data} />
    </div>
  );
};

const ReactJsonView = memo<Options>((props) => {
  return (
    <ConfigProvider {...props}>
      <InitJsonNode />
    </ConfigProvider>
  );
});

export default ReactJsonView;
