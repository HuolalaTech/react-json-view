import { memo } from 'react';
import './index.less';
import { Options } from '../../types';
import { ConfigProvider, useConfigInfo } from './components/ConfigContext';
import JsonNode from './components/JsonNode';
import { isString } from '../utils';

const InitJsonNode = () => {
  const { source, rootLabel } = useConfigInfo();
  let data: Options['source'] = source;
  if (isString(source)) {
    try {
      data = JSON.parse(source);
    } catch (e) {
      //
    }
  }
  return <JsonNode label={rootLabel} source={data} />;
};

const ReactJsonView = memo<Options>((props) => {
  return (
    <ConfigProvider {...props}>
      <InitJsonNode />
    </ConfigProvider>
  );
});

export default ReactJsonView;
