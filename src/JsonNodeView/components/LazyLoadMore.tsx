import React, { useMemo } from 'react';
import { useState } from 'react';
import { useConfigInfo } from './ConfigContext';

interface Props<T extends (string | number)[]> {
  list: T;
  render: (item: T[number]) => React.ReactElement<{ key: string | number }>;
}

const LazyLoadMore = React.memo(
  <T extends (string | number)[]>({ list, render }: Props<T>) => {
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
        current: (expandAll ? list : list.slice(0, sliceSize)) as T,
        rest: (expandAll ? [] : list.slice(sliceSize)) as T,
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
            <div className="jnv-load-more">
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
  },
);

export default LazyLoadMore;
