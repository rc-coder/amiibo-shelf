const AmiiboSkeleton = () => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 p-4">
      {[...Array(12)].map((index) => (
        <div key={index} className="flex justify-center animate-pulse">
          <div className="aspect-square h-100 w-full overflow-hidden rounded-lg bg-gray-300">
            <div className="flex flex-col w-full">
              <div className="w-full flex flex-col items-start justify-between p-4">
                <h2 className="mt-2 h-4 w-1/2 rounded-lg bg-gray-600"></h2>
                <p className="mt-2 block h-4 rounded-lg bg-gray-600 text-sm font-medium">
                  <span className="text-xs font-light"> </span>
                </p>
                <p className="mt-2 block h-4 rounded-lg bg-gray-600 text-sm font-medium">
                  <span className="text-xs font-light"> </span>
                </p>
                <p className="mt-2 block h-4 rounded-lg bg-gray-600 text-sm font-medium">
                  <span className="text-xs font-light"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AmiiboSkeleton;
