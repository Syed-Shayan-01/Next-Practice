// import { getData } from "@/service/products";

import { getData } from "@/service/products";
import Link from "next/link";

const Male = ({ data }) => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {
            data.map((product) => (
              <div key={product.id} className="group relative">
                <div className=" overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className=" min-h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={`/product/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.description}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
                {product.color === "red" && (
                  <button
                    className="border-2 border-gray-300 ml-1
                 bg-red-500 rounded-full w-6 h-6 focus:outline-none"
                  ></button>
                )}

                {product.color === "Black" && (
                  <button
                    className="border-2 border-gray-300 ml-1
                 bg-black rounded-full w-6 h-6 focus:outline-none"
                  ></button>
                )}

                {product.color === "yellow" && (
                  <button
                    className="border-2 border-gray-300 ml-1
                bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"
                  ></button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
 const data = getData();
  return {
    props: {
      data,
    },
  };
};

export default Male;
