import React from 'react';

export interface Options {
  /**
   * origin json data.
   */
  source: string;
  /**
   * root label.
   * @default ""
   */
  rootLabel?: React.ReactNode;
  /**
   * Whether expand property panel.
   * @default false
   */
  defaultExpand?: boolean;
  /**
   * `JsonNodeView` support load more property lazily.
   * The option indicated how many properties to show once, you
   * can pass "all" to show all.
   * @default 200
   */
  keyCount?: number | 'all';
  /**
   * The max length of abbreviated title in collapse.
   * @default 100
   */
  maxTitleSize?: number;
}

declare const JsonNodeView: import('react').MemoExoticComponent<Options>;

export default JsonNodeView;
