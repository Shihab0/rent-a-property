import React from "react";

const FilterBar = () => {
  return (
    <div>
      <section className="p-5 my-6 bg-gray-200 text-gray-800 border">
        <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-5">
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
            <div className="flex flex-col justify-center align-middle">
              <p className="text-2xl font-semibold leading-none">
                New York, USA
              </p>
              <p className="capitalize ">Location</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
            <div className="flex flex-col justify-center align-middle">
              <p className="text-2xl font-semibold leading-none">
                Select Move-in Date
              </p>
              <p className="capitalize">When</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
            <div className="flex flex-col justify-center align-middle">
              <p className="text-2xl font-semibold leading-none">500$-$2500</p>
              <p className="capitalize">Price</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
            <div className="flex flex-col justify-center align-middle">
              <p className="text-2xl font-semibold leading-none">Home</p>
              <p className="capitalize">Property type</p>
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
