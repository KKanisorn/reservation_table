"use client";

import {useState} from "react";
import NavBar from "@/components/navBar";
import Dashboard from "@/components/dashboard";
import Table from "@/components/table";

export default function Home() {
    const [ navClick, setNavClick ] = useState(false)
;
  return (
      <div className="grid h-screen w-screen sm:grid-rows-8 md:grid-cols-23 lg:grid-cols-23 transition-all duration-500">
          <div className={` ${navClick ? `md:col-span-3 lg:col-span-3`: `md:col-span-2 lg:col-span-1`} sm:row-span-1 bg-gray-100 md:h-screen rounded-md transition-all duration-500`} >
              <NavBar setNavClick={setNavClick} />
          </div>
          <div className={`${navClick ? `md:col-span-20 lg:col-span-20` : `md:col-span-21 lg:col-span-22`} sm:row-span-7 transition-all duration-500`}>
              <Table />
          </div>
      </div>
  );
}
