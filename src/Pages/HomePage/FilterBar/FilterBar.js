import React from "react";

const FilterBar = () => {
  return (
    <div>
      <section className="p-5 my-6 bg-gray-200 text-gray-800 border">
        <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-5">
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
            <div className="flex flex-col justify-center align-middle">
              <p className="capitalize ">Location</p>
              <p className="-mx-4 leading-none">
                <select className="select -my-3 text-2xl bg-transparent focus:outline-none font-semibold border-none w-full">
                  <option disabled selected>
                    New york, USA
                  </option>
                  <option>Svelte</option>
                  <option>Vue</option>
                  <option>React</option>
                </select>
              </p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
            <div className="flex flex-col justify-center align-middle">
              <p className="capitalize ">When</p>
              <p className="-mx-4 leading-none">
                <select className="select -my-3 text-2xl bg-transparent focus:outline-none font-semibold border-none w-full">
                  <option disabled selected>
                    Select Move-in Date
                  </option>
                  <option>Svelte</option>
                  <option>Vue</option>
                  <option>React</option>
                </select>
              </p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
            <div className="flex flex-col justify-center align-middle">
              <p className="capitalize ">Price</p>
              <p className="-mx-4 leading-none">
                <select className="select -my-3 text-2xl bg-transparent focus:outline-none font-semibold border-none w-full">
                  <option disabled selected>
                    500$-$2500
                  </option>
                  <option>Svelte</option>
                  <option>Vue</option>
                  <option>React</option>
                </select>
              </p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
            <div className="flex flex-col justify-center align-middle">
              <p className="capitalize ">Property Type</p>
              <p className="-mx-4 leading-none">
                <select className="select -my-3 text-2xl bg-transparent focus:outline-none font-semibold border-none w-full">
                  <option disabled selected>
                    Home
                  </option>
                  <option>Svelte</option>
                  <option>Vue</option>
                  <option>React</option>
                </select>
              </p>
            </div>
          </div>

          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 text-gray-800">
            <button className="btn btn-accent w-full pt-4 pb-4 space-x-4 rounded-lg md:space-x-6 ">
              Search
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FilterBar;
