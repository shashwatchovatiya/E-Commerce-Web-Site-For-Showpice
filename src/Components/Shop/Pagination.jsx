/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

export function Pagination() {
  return (
    <div className="w-full  border-gray-300 mt-20">
      <div className="mt-2 flex items-center justify-center">
        <div>
          <Link
            to="#"
            className="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900"
          >
            &larr; Previous
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            to="#"
            className="mx-1 flex items-center border p-3 px-3 py-1 text-gray-900 hover:scale-105"
          >
            1
          </Link>
          <Link
            to="#"
            className="mx-1 flex items-center border p-3 px-3 py-1 text-gray-900 hover:scale-105"
          >
            2
          </Link>
          <Link
            to="#"
            className="mx-1 flex items-center border p-3 px-3 py-1 text-gray-900 hover:scale-105"
          >
            3
          </Link>
          <p>...</p>
          <Link
            to="#"
            className="mx-1 flex items-center border p-3 px-3 py-1 text-gray-900 hover:scale-105"
          >
            8
          </Link>
          <Link
            to="#"
            className="mx-1 flex items-center border p-3 px-3 py-1 text-gray-900 hover:scale-105"
          >
            9
          </Link>
          <Link
            to="#"
            className="mx-1 flex items-center border p-3 px-3 py-1 text-gray-900 hover:scale-105"
          >
            10
          </Link>
        </div>
        <div>
          <Link href="#" className="mx-2 text-sm font-semibold text-gray-900">
            to &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Pagination;





  