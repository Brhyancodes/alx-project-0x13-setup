import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { FaPhone, FaCartShopping } from "react-icons/fa6";
import Banner from "./Banner";
import Cart from "../components/Cart";
import { FaToolbox } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";

// Dropdown data for Product
const productsDropdown = [
  {
    name: "Medical Drugs",
    description: "all medical drugs are here", 
    href: "/product",
    icon: FaToolbox,
  },
  {
    name: "Medical Equipments",
    description: "all medical drugs are here",
    href: "/product",
    icon: GiMedicines,
  },
];

// Other navigation links
const navigation = [
  { name: "Home", href: "/" },
  { name: "Product", href: "/product" }, 
  { name: "About Us", href: "/aboutus" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false); // state for product dropdown in mobile

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <Banner />
        <div className="bg-slate-200 p-4 shadow-md">
          <div className="container mx-auto flex items-center justify-between">
            <input
              type="text"
              placeholder="Search medicine"
              className="w-full ml-40 max-w-4xl py-2 px-4 rounded-md border border-gray-300  text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            <p className="ml-6 text-gray-800 font-bold flex items-center gap-2">
              <FaPhone />
              +251-95-204-0506
              <FaCartShopping
                onClick={() => setOpen(true)}
                className="text-2xl ml-10 text-green-500 hover:text-green-600 ease-in-out duration-150"
              />
              {open && <Cart open={open} setOpen={setOpen} />}
            </p>
          </div>
        </div>
        <nav className="flex items-center bg-white justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) =>
              item.name === "Product" ? (
                <Popover key={item.name} className="relative">
                  <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                    <span>{item.name}</span>
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
                  </PopoverButton>

                  <PopoverPanel className="absolute left-1/2 z-10 mt-5 w-screen max-w-md -translate-x-1/2 px-4">
                    <div className="overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="p-4">
                        {productsDropdown.map((product) => (
                          <>
                            <Link
                              to={product.href}
                              className="font-semibold text-gray-900"
                            >
                              <div
                                key={product.name}
                                className="group relative flex items-center gap-x-4 p-4 hover:bg-gray-100"
                              >
                                <product.icon
                                  className="h-6 w-6 text-gray-400 group-hover:text-green-600"
                                  aria-hidden="true"
                                />
                                <div>
                                  {product.name}

                                  <p className="text-sm text-gray-500">
                                    {product.description}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </>
                        ))}
                      </div>
                    </div>
                  </PopoverPanel>
                </Popover>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/login"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              Log in <span aria-hidden="true">&nbsp; &rarr;</span>
            </Link>
          </div>
        </nav>

        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) =>
                    item.name === "Product" ? (
                      <div key={item.name}>
                        <button
                          onClick={() =>
                            setProductDropdownOpen(!productDropdownOpen)
                          }
                          className="-mx-3 flex items-center justify-between w-full rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                          <ChevronDownIcon
                            className={`${
                              productDropdownOpen ? "rotate-180" : ""
                            } h-5 w-5`}
                          />
                        </button>
                        {productDropdownOpen && (
                          <div className="mt-2 space-y-2">
                            {productsDropdown.map((product) => (
                              <Link
                                key={product.name}
                                to={product.href}
                                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                {product.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
                <div className="py-6">
                  <Link
                    to="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </>
  );
}
