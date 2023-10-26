import React from 'react';

export interface Options {
  /**
   * Origin serializable data.
   */
  source: string | object | null;
  /**
   * Whether enable dark mode.
   * @default false
   */
  darkMode?: boolean;
  /**
   * root label.
   * @default ""
   */
  rootLabel?: React.ReactNode;
  /**
   * Whether expand property panel.
   * @default false
   */
  defaultExpand?: boolean | number;
  /**
   * `ReactJsonView` support load more property lazily.
   * The option indicated how many properties to show one time, you
   * can pass "all" to expand all.
   * @default 200
   */
  keyCount?: number | 'all';
  /**
   * The max length of abbreviated title in collapse.
   * @default 100
   */
  maxTitleSize?: number;
  /**
   * Whether copyable.
   * @default true
   */
  copyable?: boolean;
  /**
   * Whether expandable.
   * @default true
   */
  expandable?: boolean;
}

declare const ReactJsonView: import('react').NamedExoticComponent<Options>;

export default ReactJsonView;
