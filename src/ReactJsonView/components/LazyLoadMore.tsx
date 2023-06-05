import React, { useMemo } from 'react';
import { useState } from 'react';
import { useConfigInfo } from './ConfigContext';

interface Props {
  list: string[];
  render: (item: string) => React.ReactElement<{ key: string | number }>;
}

const LazyLoadMore = React.memo(({ list, render }: Props) => {
  const { keyCount } = useConfigInfo();
  const sliceSize = useMemo(() => {
    if (keyCount === 'all') return list.length;
    if (Number.isFinite(keyCount)) return keyCount;
    return 200;
  }, [keyCount, list.length]);
  const [panelExpanded, setPanelExpanded] = useState(false);
  const [expandAll, setExpandAll] = useState(false);

  const dataSlice = useMemo(() => {
    return {
      current: expandAll ? list : list.slice(0, sliceSize),
      rest: expandAll ? [] : list.slice(sliceSize),
    };
  }, [expandAll, list, sliceSize]);

  const { current, rest } = dataSlice;

  return (
    <>
      {current.map((k) => (
        <div key={k}>{render(k)}</div>
      ))}
      {rest.length > 0 ? (
        !panelExpanded ? (
          <div className="rjv-load-more">
            {'('}
            <span onClick={() => setPanelExpanded(true)}>
              {rest.length} more
            </span>
            {' ... or '}
            <span
              onClick={() => {
                setExpandAll(true);
                setPanelExpanded(true);
              }}
            >
              ALL!
            </span>
            {')'}
          </div>
        ) : (
          <LazyLoadMore list={rest} render={render} />
        )
      ) : null}
    </>
  );
});

export default LazyLoadMore;
