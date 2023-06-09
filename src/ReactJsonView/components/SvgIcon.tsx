import { SVGAttributes } from 'react';

export const ArrowRight = (props: SVGAttributes<Element>) => (
  <span title="Expand">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M 0 0 l 16 12 L 0 24 z" fill="#999" />
    </svg>
  </span>
);

export const TextCopy = (props: SVGAttributes<Element>) => (
  <span title="Copy">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="#9a9a9a"
        strokeWidth="2"
        d="M9 15h8h-8Zm0-4h10H9Zm0-4h4h-4Zm7-6v6h6M6 5H2v18h16v-4m4 0H6V1h11l5 5v13Z"
      />
    </svg>
  </span>
);

export const CheckMark = (props: SVGAttributes<Element>) => (
  <span title="Checked">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="m173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69L432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
      />
    </svg>
  </span>
);

export const CrossMark = (props: SVGAttributes<Element>) => (
  <span title="Fail">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="currentColor"
        d="M24.879 2.879A3 3 0 1 1 29.12 7.12l-8.79 8.79a.125.125 0 0 0 0 .177l8.79 8.79a3 3 0 1 1-4.242 4.243l-8.79-8.79a.125.125 0 0 0-.177 0l-8.79 8.79a3 3 0 1 1-4.243-4.242l8.79-8.79a.125.125 0 0 0 0-.177l-8.79-8.79A3 3 0 0 1 7.12 2.878l8.79 8.79a.125.125 0 0 0 .177 0l8.79-8.79Z"
      />
    </svg>
  </span>
);
