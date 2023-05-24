import { memo } from 'react';
import './index.less';
import { Options } from '../../types';
import { ConfigProvider, useConfigInfo } from './components/ConfigContext';
import JsonNode from './components/JsonNode';

const InitJsonNode = () => {
  const { source, rootLabel } = useConfigInfo();
  return <JsonNode label={rootLabel} source={source} />;
};

const ReactJsonView = memo<Options>((props) => {
  return (
    <ConfigProvider {...props}>
      <InitJsonNode />
    </ConfigProvider>
  );
});

export default ReactJsonView;
