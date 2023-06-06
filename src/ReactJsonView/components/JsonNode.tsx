import { useState, useMemo, ReactNode } from 'react';
import {
  clsx,
  isBoolean,
  isListOrMap,
  isNumber,
  shortTitle,
} from '../../utils';
import { ArrowRight } from './SvgIcon';
import { useConfigInfo } from './ConfigContext';
import CopyContent from './CopyContent';
import LazyLoadMore from './LazyLoadMore';
import { Options } from '../../../types';

const JsonNode = ({
  source = null,
  depth = 1,
  label = '',
}: {
  source: Options['source'];
  depth?: number;
  label?: ReactNode;
}) => {
  const { defaultExpand, maxTitleSize } = useConfigInfo();
  const [expanded, setExpanded] = useState(() => {
    if (isBoolean(defaultExpand)) {
      return defaultExpand;
    }
    if (isNumber(defaultExpand)) {
      return defaultExpand >= depth;
    }
    return false;
  });

  let data: unknown;
  try {
    data = JSON.parse(JSON.stringify(source));
  } catch (e) {
    label = 'Error';
    data = 'The source value must be a valid json object';
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
          <CopyContent content={`${data}`} />
        </span>
      </code>
    );
  }

  if (isListOrMap(data)) {
    const title = shortTitle(data, maxTitleSize);

    return (
      <div className="rjv-node">
        <div className="rjv-node__title" onClick={() => setExpanded(!expanded)}>
          <ArrowRight
            width={10}
            height={10}
            className={clsx('rjv-node__spread-controller', {
              spread: expanded,
            })}
          />
          {labelContent}
          {(!label || !expanded) && <code>{title}</code>}
        </div>
        {expanded && (
          <div className="rjv-node__property" data-depth={depth}>
            <LazyLoadMore
              list={Object.keys(data)}
              render={(key) => (
                <JsonNode
                  label={key}
                  source={(data as any)[key]}
                  depth={depth + 1}
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
