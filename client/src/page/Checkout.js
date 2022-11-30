import React, { useContext } from "react";
import Container from "../components/common/Container";
import { CoursesContext } from "../context/CourseContextProvider";

const Checkout = () => {
  const { cart } = useContext(CoursesContext);
  return (
    <Container CS="py-6">
      <div className="lg:col-span-2 col-span-3 bg-slate-100 dark:bg-slate-800 max-w-[700px]  mx-auto px-4 md:px-12 py-6  rounded">
        <div className="rounded-md">
          <form>
            <section>
              <h2 className="uppercase tracking-wide text-lg font-semibold  text-neutral-700  dark:text-neutral-300  my-2">
                Shipping & Billing Information
              </h2>
              <fieldset className="mb-3 bg-white shadow-lg rounded ">
                <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                  <span className="text-right px-2">Name</span>
                  <input
                    name="name"
                    className="focus:outline-none px-3"
                    placeholder="Try Odinsson"
                    required=""
                  />
                </label>
                <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                  <span className="text-right px-2">Email</span>
                  <input
                    name="email"
                    type="email"
                    className="focus:outline-none px-3"
                    placeholder="try@example.com"
                    required=""
                  />
                </label>
                <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                  <span className="text-right px-2">Address</span>
                  <input
                    name="address"
                    className="focus:outline-none px-3"
                    placeholder="10 Street XYZ 654"
                  />
                </label>
                <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                  <span className="text-right px-2">City</span>
                  <input
                    name="city"
                    className="focus:outline-none px-3"
                    placeholder="San Francisco"
                  />
                </label>
                <label className="inline-flex w-2/4 border-gray-200 py-3">
                  <span className="text-right px-2">State</span>
                  <input
                    name="state"
                    className="focus:outline-none px-3"
                    placeholder="CA"
                  />
                </label>
                <label className="xl:w-1/4 xl:inline-flex py-3 items-center flex xl:border-none border-t border-gray-200 py-3">
                  <span className="text-right px-2 xl:px-0 xl:text-none">
                    ZIP
                  </span>
                  <input
                    name="postal_code"
                    className="focus:outline-none px-3"
                    placeholder="98603"
                  />
                </label>
              </fieldset>
            </section>
          </form>
        </div>
        <div className="rounded-md">
          <section>
            <h2 className="uppercase tracking-wide text-lg font-semibold text-neutral-700  dark:text-neutral-300 my-2">
              Payment Information
            </h2>
            <fieldset className="mb-3 bg-white shadow-lg rounded  text-neutral-700  dark:text-neutral-300">
              <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                <span className="text-right px-2">Card</span>
                <input
                  name="card"
                  className="focus:outline-none px-3 w-full"
                  placeholder="Card number MM/YY CVC"
                  required=""
                />
              </label>
            </fieldset>
          </section>
        </div>
        <button className="submit-button px-4 py-3 rounded-full bg-pink-400 text-white   dark:text-neutral-300  focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
          Pay ${cart && cart.price}
        </button>
      </div>
    </Container>
  );
};

export default Checkout;
