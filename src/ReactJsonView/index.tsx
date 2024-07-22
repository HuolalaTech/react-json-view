import { memo } from "react";
import "./index.less";
import { Options } from "../../types";
import { ConfigProvider, useConfigInfo } from "./components/ConfigContext";
import JsonNode from "./components/JsonNode";

const InitJsonNode = () => {
  const { source, darkMode, rootLabel } = useConfigInfo();
  return (
    <div data-dark-mode={darkMode} className="rjv">
      <JsonNode label={rootLabel} source={source} />
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
