import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "../../css/navbar-footer/NavBar.css";

const NavBar = ({currentPage}) => {

  const navigation = [
    { name: "Home", href: "/", current: true},
    { name: "About", href: "/about", current: false },
    { name: "Skills", href: "#", current: false},
    { name: "Education", href: "#", current: false },
    { name: "Work", href: "#", current: false },
    { name: "Contact", href: "#", current: false },
  ];

  function classNames(...classes) {
    console.log(classes.filter(Boolean).join(' '))
    return classes.filter(Boolean).join(' ')
  }

  function clickNavBar(item) {
    navigation.forEach((e) => {
      document.querySelector(".text-color-navbar-current")?.classList.add("relative");
      document.querySelector(".text-color-navbar-current")?.classList.add("text-color-navbar");
      document.querySelector(".text-color-navbar-current")?.classList.add("hover:text-color-navbar");
      document.querySelector(".text-color-navbar-current")?.classList.remove("text-color-navbar-current");
      e.current = false;
      if(item.name == e.name){
        e.current = true;
      }
    })
  }
  console.log("navigation", navigation);
  return (
    <Disclosure as="nav" className="nav-bar-colors">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-6 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "text-color-navbar-current"
                            : "relative text-color-navbar hover:text-color-navbar",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                        onClick={() => clickNavBar(item)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
