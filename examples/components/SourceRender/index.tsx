import { PropsWithChildren } from 'react';
import ReactJsonView from '../../../src/ReactJsonView';

const ExchangeIcon = (props: React.SVGAttributes<Element>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 10h14l-4-4m0 8H3l4 4"
      />
    </svg>
  );
};

const CardHeader = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div className="px-4 py-3 bg-gray-200 dark:bg-gray-700">
      <span className="text-slate-500 dark:text-slate-400 text-md italic">
        {children}
      </span>
    </div>
  );
};

const CardBody = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div className="p-4 max-h-80 overflow-y-auto bg-gray-100 dark:bg-gray-800">
      {children}
    </div>
  );
};

interface Props {
  darkMode: boolean;
  originSource: string;
  renderSource: any;
  rjvProps: any;
}
export const SourceRender = ({
  darkMode,
  originSource,
  renderSource,
  rjvProps,
}: Props) => {
  return (
    <div className="flex justify-evenly">
      <div className="basis-[30%] shrink-0 break-all">
        <div className="rounded-lg shadow-md overflow-hidden">
          <CardHeader>Source, its type is: {typeof renderSource}</CardHeader>
          <CardBody>{originSource}</CardBody>
        </div>
      </div>
      <div className="basis-[60px] grow shrink-0 flex justify-center">
        <ExchangeIcon className="mt-12 text-lg dark:text-slate-600" />
      </div>
      <div className="basis-[65%] shrink-0">
        <div className="rounded-lg shadow-md overflow-hidden">
          <CardHeader>Render result</CardHeader>
          <CardBody>
            <ReactJsonView
              darkMode={darkMode}
              source={renderSource}
              defaultExpand={1}
              maxTitleSize={70}
              {...rjvProps}
            />
          </CardBody>
        </div>
      </div>
    </div>
  );
};
