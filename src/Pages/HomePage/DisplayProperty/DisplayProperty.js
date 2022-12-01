import React from "react";

const DisplayProperty = () => {
  return (
    <div>
      <div className="max-w-xs overflow-hidden rounded-lg shadow-lg bg-gray-100 text-gray-800">
        <div
          className="flex items-end justify-end h-32 p-4 bg-gray-500 bg-center bg-cover"
          style={{
            backgroundImage:
              "url(https://source.unsplash.com/300x150/?skyline)",
          }}
        >
          <p className="px-2 py-1 text-sm tracking-widest text-gray-50 uppercase bg-gray-900 bg-opacity-75 rounded shadow-lg">
            Popular
          </p>
        </div>
        <div className="flex justify-between p-4">
          <div className="flex flex-col flex-1 gap-2">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <span className="text-4xl text-gray-600 font-semibold">
                  $2,500
                </span>
                <span className="text-lg text-gray-400">/ Month</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-3xl p-0">Love Hut</h3>
            <p className="text-sm">
              Mostly sunny throughout the day.
              <br />
              6-10 KPH winds.
            </p>
          </div>
          <div className="text-sm leading-loose">
            <div className="flex items-center"></div>
          </div>
        </div>
        <div className="flex items-center justify-evenly mx-4 gap-0 p-4 border-t text-gray-400 border-gray-700">
          <div className="flex items-center space-x-1">
            <span className="font-bold">3</span>
            <span className="text-sm">Bed</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="font-bold">2</span>
            <span className="text-sm">Bathrooms</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="font-bold">5x7</span>
            <span className="text-sm">
              m
              <sup>
                <small>2</small>
              </sup>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayProperty;
