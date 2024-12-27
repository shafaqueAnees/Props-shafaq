import React from "react";
import Link from "next/link";

const DynamicRoute = async (props: any) => {
  const url = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${props.params.id}`
  );
  const data = await url.json();

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-300 max-w-md w-full hover:shadow-xl transition-shadow duration-300">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Photo Details
        </h1>
        <div className="mb-4">
          <p className="text-gray-600 font-medium mb-2">
            <strong className="text-gray-800">ID:</strong> {props.params.id}
          </p>
          <p className="text-gray-600 font-medium mb-2">
            <strong className="text-gray-800">Title:</strong> {data.title}
          </p>
          <p className="text-gray-600 font-medium mb-2">
            <strong className="text-gray-800">User ID:</strong> {data.userId}
          </p>
          <p className="text-gray-600 font-medium mb-4">
            <strong className="text-gray-800">Description:</strong>{" "}
            {data.description}
          </p>
        </div>
        <Link href="/">
          <button className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition duration-300">
          Navigate More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DynamicRoute;
