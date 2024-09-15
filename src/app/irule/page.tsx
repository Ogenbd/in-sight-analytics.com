import Link from "next/link";

const gridItemClass =
  "flex items-center justify-center bg-white p-2 rounded-md w-full text-center";

const IRule = () => {
  return (
    <article className="flex w-full flex-col items-center gap-14 bg-slate-300 py-24">
      <div className="mt-8 w-page max-w-full overflow-hidden">
        <iframe
          src="https://prezi.com/view/dcr1Uwqzv4Ix3inpy8Dm/embed"
          className="aspect-video w-full"
          allowFullScreen={true}
          scrolling="no"
        />
      </div>
      <div className="flex w-page max-w-full flex-col gap-6 px-2 sm:px-0">
        <div className="font w-full rounded-md bg-prezi p-2 text-lg font-semibold text-white">
          The IRule CostPerform add-on allows for the management of model
          allocations on the “Meta model level”. IRule extends the capabilities
          of conditional driver to include not only the destination but also the
          source object definition.
        </div>
        <div className="grid grid-cols-3 grid-rows-3 justify-items-center gap-3">
          <div className={gridItemClass}>
            <p>Streamline model design</p>
          </div>
          <div className="row-span-2 flex w-full items-center justify-center rounded-md bg-prezi p-2 text-center text-xl font-bold text-white">
            <p>IRule benefits</p>
          </div>
          <div className={gridItemClass}>
            <p>Consistent model behavior</p>
          </div>
          <div className={gridItemClass}>
            <p>Reduced construction and maintenance times</p>
          </div>
          <div className={gridItemClass}>
            <p>Single logic for multiple models</p>
          </div>
          <div className={gridItemClass}>
            <p>Management of allocations versions</p>
          </div>
          <div className={gridItemClass}>
            <p>Additional allocation definition capabilities</p>
          </div>
          <div className={gridItemClass}>
            <p>In model documentation</p>
          </div>
        </div>
      </div>
      <Link
        href="/IRule.zip"
        className="w-page max-w-full rounded-lg bg-lightgold p-4 text-center text-xl font-bold transition hover:brightness-75 active:brightness-125"
      >
        Download IRule
      </Link>
    </article>
  );
};

export default IRule;
