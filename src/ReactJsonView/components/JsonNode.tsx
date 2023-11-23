import { useState, useMemo, ReactNode, Fragment } from 'react';
import {
  clsx,
  cutOffStringLiteral,
  isBoolean,
  isListOrMap,
  isNumber,
  shortTitle
} from '../../utils';
import { ArrowRight } from './SvgIcon';
import { useConfigInfo } from './ConfigContext';
import LazyLoadMore from './LazyLoadMore';
import { Options } from '../../../types';
import React from 'react';
import Copyable from './CopyContent';

const PrimitiveContent = ({ content }: { content: React.ReactNode }) => {
  const { stringEllipse } = useConfigInfo();
  const computedContent = useMemo(() => {
    if (typeof content !== 'string') return content;
    if (stringEllipse) return cutOffStringLiteral(content);
    return content;
  }, [content, stringEllipse]);

  return React.createElement(Fragment, null, computedContent);
};

const JsonNode = ({
  source = null,
  depth = 1,
  label = ''
}: {
  source: Options['source'];
  depth?: number;
  label?: ReactNode;
}) => {
  const { defaultExpand, maxTitleSize, copyable, expandable } = useConfigInfo();

  const [expanded, setExpanded] = useState(() => {
    if (!expandable) return false;
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
    data = 'The source value must be serializable.';
  }

  const labelContent = useMemo(() => {
    if (label) {
      return <code className="rjv-node__property-key">{label}: </code>;
    }
    return null;
  }, [label]);

  let className = '';
  const type = typeof data;
  const primitiveType = ['string', 'number', 'boolean'];
  if (primitiveType.indexOf(type) > -1) {
    className = type;
  } else if (data === null) {
    className = 'null';
  }
  if (className) {
    return (
      <code className="rjv-primitive">
        {labelContent && (
          <>
            <span style={{ opacity: 0 }}>
              <ArrowRight width={10} height={10} />
            </span>
            {labelContent}
          </>
        )}
        <span className={clsx('rjv-primitive-type', className)}>
          <PrimitiveContent content={`${data}`} />
        </span>
        {copyable && <Copyable data={JSON.stringify(data, null, 2)} />}
      </code>
    );
  }

  if (isListOrMap(data)) {
    const title = shortTitle(data, maxTitleSize);

    return (
      <div className="rjv-ref">
        <div
          className="rjv-ref-title"
          onClick={() => {
            if (expandable) {
              setExpanded(!expanded);
            }
          }}
          data-depth={depth - 1}
        >
          {expandable && (
            <ArrowRight
              width={10}
              height={10}
              className={clsx('rjv-ref-arrow', {
                spread: expanded
              })}
            />
          )}
          {labelContent}
          {(!label || !expanded) && (
            <code className="rjv-node__property-value">{title}</code>
          )}
          {copyable && <Copyable data={JSON.stringify(data, null, 2)} />}
        </div>
        {expanded && (
          <div className="rjv-ref-property">
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
