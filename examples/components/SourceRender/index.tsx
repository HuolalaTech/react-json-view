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

interface Props {
  originSource: string;
  renderSource: any;
  rjvProps: any;
}
export const SourceRender = ({
  originSource,
  renderSource,
  rjvProps,
}: Props) => {
  return (
    <div className="flex justify-evenly">
      <div className="basis-[30%] shrink-0">
        <div className="rounded-lg shadow-md overflow-hidden">
          <div className="px-4 py-3 bg-slate-200">
            <span className="text-slate-500 text-md italic">
              Source, its type is: {typeof renderSource}
            </span>
          </div>
          <div className="p-4 max-h-80 overflow-y-auto bg-slate-100">
            {originSource}
          </div>
        </div>
      </div>
      <div className="basis-[60px] grow shrink-0 flex justify-center">
        <ExchangeIcon className="mt-12 text-lg" />
      </div>
      <div className="basis-[65%] shrink-0">
        <div className="rounded-lg shadow-md overflow-hidden">
          <div className="px-4 py-3 bg-slate-200">
            <span className="text-slate-500 text-md italic">Render result</span>
          </div>
          <div className="p-4 max-h-80 overflow-y-auto bg-slate-100 max">
            <ReactJsonView
              source={renderSource}
              defaultExpand={1}
              maxTitleSize={70}
              {...rjvProps}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
