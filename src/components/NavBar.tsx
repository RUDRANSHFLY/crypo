"use client";
import React from "react";
import { Input } from "./ui/input";

const NavBar = () => {
  const handleSearch = (coin: string) => {
    const params = new URLSearchParams(window.location.search);
    if (coin.trim()) {
      params.set("coin", coin);
    } else {
      params.delete("coin");
    }
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params.toString()}`
    );
  };
  return (
    <header className="fixed top-0 left-0 w-full sm:h-20 md:h-12 px-5 md:px-0 flex flex-col md:flex-row justify-around items-center bg-white shadow-md z-50 py-4">
      <h1 className="text-2xl uppercase tracking-wider font-bold">Crypo</h1>

      <Input
        type={"search"}
        placeholder={"Search"}
        className="bg-white border-2 border-gray-400 sm:w-sm md:w-xs max-w-lg"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </header>
  );
};

export default NavBar;
