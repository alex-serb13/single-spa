export function ProductsPlaceholder() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl pt-6 px-4 sm:pt-16 sm:px-6 lg:max-w-6xl lg:px-8">
        <div className="bg-white pb-20 ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="sm:text-center">
              <h2 className="text-lg font-semibold leading-8 text-indigo-600">
                Products
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A better way get what you need
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 5 }).map((_, id) => (
            <a key={id} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <div class="animate-pulse h-6 bg-slate-300 rounded col-span-2"></div>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                <div class="animate-pulse h-6 bg-slate-300 rounded col-span-2"></div>
              </h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                <div class="animate-pulse h-6 bg-slate-300 rounded col-span-2"></div>
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
