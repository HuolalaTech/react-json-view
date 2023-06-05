import { useState, useMemo, ReactNode } from 'react';
import { clsx, isListOrMap, shortTitle } from '../../utils';
import { ArrowRight } from './SvgIcon';
import { useConfigInfo } from './ConfigContext';
import CopyContent from './CopyContent';
import LazyLoadMore from './LazyLoadMore';

const JsonNode = ({
  source = '',
  label = '',
}: {
  source: string;
  label?: ReactNode;
}) => {
  const { defaultExpand, maxTitleSize } = useConfigInfo();
  const [collapsed, setCollapsed] = useState(!defaultExpand);

  let data: unknown;
  try {
    data = JSON.parse(source);
  } catch (e) {
    data = `${source}`;
  }

  const labelContent = useMemo(() => {
    if (label) {
      return <code className="rjv-node__property-key">{label}: </code>;
    }
    return null;
  }, [label]);

  let className = '';
  const type = typeof data;
  const primitiveType = ['string', 'number', 'symbol', 'boolean', 'undefined'];
  if (primitiveType.indexOf(type) > -1) {
    className = type;
  } else if (data === null) {
    className = 'null';
  }
  if (className) {
    return (
      <code>
        {labelContent && (
          <>
            <span style={{ opacity: 0 }}>
              <ArrowRight width={10} height={10} />
            </span>
            {labelContent}
          </>
        )}
        <span className={clsx('rjv-type-node', className)}>
          <CopyContent content={`${data}`} rows={3} length={150} />
        </span>
      </code>
    );
  }

  if (isListOrMap(data)) {
    const title = shortTitle(data, maxTitleSize);

    return (
      <div className="rjv-node">
        <div
          className="rjv-node__title"
          onClick={() => setCollapsed(!collapsed)}
        >
          <ArrowRight
            width={10}
            height={10}
            className={clsx('rjv-node__spread-controller', {
              spread: !collapsed,
            })}
          />
          {labelContent}
          {(!label || collapsed) && <code>{title}</code>}
        </div>
        {!collapsed && (
          <div className="rjv-node__property">
            <LazyLoadMore
              list={Object.keys(data)}
              render={(key) => (
                <JsonNode
                  label={key}
                  source={JSON.stringify((data as any)[key])}
                />
              )}
            />
          </div>
        )}
      </div>
    );
  }
  return null;
};

export default JsonNode;
