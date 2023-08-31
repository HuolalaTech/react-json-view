import { useCallback, useMemo } from 'react';
import copy from 'copy-to-clipboard';
import React, { MouseEvent } from 'react';
import { useSwitchWithDelay } from '../../utils';
import { CheckMark, CrossMark, TextCopy } from './SvgIcon';

interface Props {
  data: string;
}

const Copyable: React.FC<Props> = ({ data }) => {
  const [state, switchState] = useSwitchWithDelay(0);

  const onCopy = useCallback(
    (e: MouseEvent<HTMLSpanElement>) => {
      e.stopPropagation();
      if (state !== 0) return;
      const copyResult = copy(`${data}`);
      if (copyResult) {
        switchState(1);
      } else {
        switchState(-1);
      }
    },
    [data, state, switchState]
  );

  const icon = useMemo(() => {
    let Icon = TextCopy;
    let color = '#333';
    switch (state) {
      case 1:
        Icon = CheckMark;
        color = '#52c41a';
        break;
      case -1:
        Icon = CrossMark;
        color = '#ff4d4f';
        break;
      default:
        break;
    }
    return <Icon width={14} height={14} color={color} />;
  }, [state]);

  return (
    <span className="rjv-copyable">
      <span className="rjv-copyable-icon" onClick={onCopy}>
        {icon}
      </span>
    </span>
  );
};

export default Copyable;
