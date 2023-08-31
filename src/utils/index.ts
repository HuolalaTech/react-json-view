import { useState, useRef, useEffect, useCallback } from 'react';

export const clsx = (...args: unknown[]) => {
  const result: Set<string> = new Set();
  args.forEach((i) => {
    if (!i) return;
    if (typeof i === 'string') {
      result.add(i);
    } else if (i instanceof Array) {
      result.add(clsx(...i));
    } else if (i instanceof Object) {
      Object.entries(i).forEach(([name, valid]) => {
        if (valid) {
          result.add(name);
        }
      });
    }
  });
  return [...result].join(' ');
};

export function cutOffStringLiteral(targetLiteral: unknown): string {
  if (typeof targetLiteral !== 'string') return '';
  const targetLength = targetLiteral.length;
  if (targetLength < 100) return targetLiteral;

  return [targetLiteral.slice(0, 49), '...', targetLiteral.slice(-48)].join('');
}

export function shortTitle(data: any, max = 100) {
  const { constructor } = Object.getPrototypeOf(data);
  if ([Object, Array].indexOf(constructor) === -1) return null;

  let hasEllipsis = false;
  const title = ['prefix', 'content', hasEllipsis, 'suffix'];
  if (constructor === Array) {
    let content = '';
    for (let i = 0; i < data.length; i++) {
      let curVal = data[i];
      if (typeof curVal === 'string') {
        curVal = cutOffStringLiteral(curVal);
      }
      const curStr = JSON.stringify(curVal);
      const result = `${content}${curStr}, `;
      if (result.length > max) {
        hasEllipsis = true;
        break;
      }
      content = result;
    }
    title[0] = '[';
    title[1] = content;
    title[3] = ']';
  } else {
    let content = '';
    for (const key in data) {
      let curVal = data[key];
      if (typeof curVal === 'string') {
        curVal = cutOffStringLiteral(curVal);
      }
      const curStr = `"${key}": ${JSON.stringify(curVal)}`;
      const result = `${content}${curStr}, `;
      if (result.length > max) {
        hasEllipsis = true;
        break;
      }
      content = result;
    }
    title[0] = '{';
    title[1] = content;
    title[3] = '}';
  }
  if (hasEllipsis) {
    title[2] = '...';
  } else {
    title[1] = title[1].slice(0, -2);
    title[2] = '';
  }
  return title.join('');
}

export function useSwitchWithDelay<T>(defaultValue: T, delay = 1500) {
  const [currentValue, setCurrentValue] = useState(() => defaultValue);
  const timer = useRef<number | null>(null);
  useEffect(
    () => () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = null;
    },
    [],
  );
  const onSwitchValue = useCallback(
    (newValue: T) => {
      if (currentValue !== defaultValue) return;
      setCurrentValue(newValue);
      timer.current = window.setTimeout(() => {
        setCurrentValue(defaultValue);
      }, delay);
    },
    [currentValue, defaultValue, delay],
  );

  return [currentValue, onSwitchValue] as const;
}

export function toStringTag(data: unknown) {
  return Object.prototype.toString.call(data);
}

export function isBoolean(data: unknown): data is boolean {
  return typeof data === 'boolean';
}
export function isNumber(data: unknown): data is number {
  return typeof data === 'number';
}
export function isString(data: unknown): data is string {
  return typeof data === 'string';
}

export function isArray<T = unknown>(data: unknown): data is T[] {
  return Array.isArray(data);
}

export function isObject<T = unknown>(
  data: unknown,
): data is Record<string, T> {
  return (
    typeof data === 'object' &&
    data !== null &&
    toStringTag(data) === '[object Object]'
  );
}

export function isListOrMap<T = unknown>(
  data: unknown,
): data is T[] | Record<string, T> {
  return isArray(data) || isObject(data);
}
