import { Fragment, useCallback, useMemo } from 'react';
import copy from 'copy-to-clipboard';
import React from 'react';
import { cutOffStringLiteral, useSwitchWithDelay } from '../../utils';
import { CheckMark, CrossMark, TextCopy } from './SvgIcon';

interface Props {
  content: string;
}

const CopyContent: React.FC<Props> = ({ content }) => {
  const [state, switchState] = useSwitchWithDelay(0);
  const computedContent = useMemo(() => {
    if (typeof content !== 'string') return content;
    return cutOffStringLiteral(content);
  }, [content]);

  const onCopy = useCallback(() => {
    if (state !== 0) return;
    const copyResult = copy(`${content}`);
    if (copyResult) {
      switchState(1);
    } else {
      switchState(-1);
    }
  }, [content, state, switchState]);

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

  if (computedContent === content)
    return React.createElement(Fragment, null, content);

  return (
    <span className="copyable">
      <span className="copyable-content">{computedContent}</span>
      <span className="copyable-icon" onClick={onCopy}>
        {icon}
      </span>
    </span>
  );
};

export default CopyContent;
