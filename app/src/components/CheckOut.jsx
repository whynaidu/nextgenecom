import React from "react";

const products = [
  {
    id: 1,
    name: "APPLE iPhone 11 (White, 128 GB)",
    href: "#",
    price: "₹47,199",
    originalPrice: "₹48,900",
    discount: "5% Off",
    color: "White",
    size: "6.1 inch",
    imageSrc:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/shopping-cart/iphone-11-256-u-mwm82hn-a-apple-0-original-imafkg25mhaztxns.jpeg?q=90",
  },
  {
    id: 2,
    name: "Syska 20000 mAh Power Bank",
    href: "#",
    price: "₹1,549",
    originalPrice: "₹2,499",
    discount: "38% off",
    color: "Black",
    leadTime: "3-4 weeks",
    size: "20000 mAh",
    imageSrc:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/shopping-cart/p2024j-bk-p2024j-20000-syska-original-imafz4zuunbw3mfu.jpeg?q=70",
  },
  {
    id: 3,
    name: "Back Cover for Apple Iphone 11",
    href: "#",
    price: "₹219 ",
    originalPrice: "₹999",
    discount: "78% off",
    color: "Black",
    imageSrc:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/shopping-cart/linetpu-029-012-101-gadgetm-original-imag7ayekbkvfu4f.jpeg?q=70",
  },
];

export const CheckOut = () => {
  return (
    <div className="dark:nx-bg-neutral-900 mt-6 rounded-xl">
      <div className="mb-4">
        <div className="mt-2">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl flex justify-center">
            Shopping Cart
          </h1>
        </div>

        <form className="mt-6 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-6 xl:gap-x-6">
          <section
            aria-labelledby="cart-heading"
            className="lg:col-span-8 bg-black dark:bg-white rounded-xl"
          >
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul role="list">
              {products.map((product, productIdx) => (
                <div key={product.id} className="px-4">
                  <li className="flex py-6 sm:py-6 ">
                    <div className="flex-shrink-0">
                      <img
                        src={product.imageSrc}
                        alt={product.name}
                        className="h-24 w-24 rounded-md object-contain object-center sm:h-38 sm:w-38"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-sm">
                              <a
                                href={product.href}
                                className="font-medium text-lg  text-black dark:text-black"
                              >
                                {product.name}
                              </a>
                            </h3>
                          </div>
                          <div className="mt-1 flex text-sm">
                            <p className=" text-black dark:text-black">
                              {product.color}
                            </p>
                            {product.size ? (
                              <p className="ml-4 border-l border-gray-200 pl-4  text-black dark:text-black">
                                {product.size}
                              </p>
                            ) : null}
                          </div>
                          <div className="mt-1 flex items-end">
                            <p className="text-xs line-through font-medium  text-black dark:text-black">
                              {product.originalPrice}
                            </p>
                            <p className="text-sm font-medium  text-black dark:text-black">
                              &nbsp;&nbsp;{product.price}
                            </p>
                            &nbsp;&nbsp;
                            <p className="text-sm font-medium text-green-500">
                              {product.discount}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <div className="flex mb-2 ">
                    <div className="flex min-w-24 items-center dark:text-black">
                      <button
                        type="button"
                        className="h-7 w-7 rounded-full border border-[#e0e0e0]"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        className="h-7 w-9 text-center mx-1 border dark:bg-white dark:text-black"
                        value={1}
                        onChange={() => {}}
                      />
                      <button
                        type="button"
                        className="h-7 w-7 rounded-full border border-[#e0e0e0] flex justify-center items-center"
                      >
                        +
                      </button>
                    </div>
                    <div className="ml-4 flex flex-1 sm:ml-6 dark:text-black">
                      <button className="font-medium mr-4 bg-slate-200/70 rounded-lg px-3 py-2 hover:bg-black hover:text-white">
                        SAVE FOR LATTER
                      </button>
                      <button className="font-medium bg-red-200/70 rounded-lg px-3 py-2">
                        REMOVE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-md bg-white dark:bg-white lg:col-span-4 lg:mt-0 lg:p-0"
          >
            <h2
              id="summary-heading"
              className=" px-4 py-3 sm:p-4 border-b border-gray-200 text-lg font-medium text-black dark:text-black"
            >
              Price Details
            </h2>

            <div>
              <dl className=" space-y-1  px-6 py-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <dt className="text-sm  text-black dark:text-black">
                    Price (3 item)
                  </dt>
                  <dd className="text-sm font-medium  text-black dark:text-black">
                    ₹ 52,398
                  </dd>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <dt className="flex items-center text-sm  text-black dark:text-black">
                    <span>Discount</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700 dark:text-green-400">
                    - ₹ 3,431
                  </dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="flex text-sm  text-black dark:text-black">
                    <span>Delivery Charges</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700 dark:text-green-400">
                    Free
                  </dd>
                </div>
                <div className="flex items-center justify-between py-4 border-y border-dashed ">
                  <dt className="text-base font-medium text-black dark:text-black">
                    Total Amount
                  </dt>
                  <dd className="text-base font-medium ext-black dark:text-black">
                    ₹ 48,967
                  </dd>
                </div>
              </dl>
              <div className="px-6 pb-4 font-medium text-green-700 dark:text-green-400">
                You will save ₹ 3,431 on this order
              </div>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};
