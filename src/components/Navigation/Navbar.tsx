import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';

export default function Navbar() {
  return (
    <header className="w-full bg-black border-b border-zinc-800 h-16 flex items-center px-8 z-20">
      <nav className="flex gap-6">
        <a
          href="#"
          className="text-base text-zinc-200 hover:text-white transition-colors font-semibold"
        >
          Explore
        </a>
        <a
          href="#"
          className="text-base text-zinc-200 hover:text-white transition-colors font-semibold"
        >
          Coupon Codes
        </a>
        <a
          href="#"
          className="text-base text-zinc-200 hover:text-white transition-colors font-semibold"
        >
          Newest Additions
        </a>
      </nav>
      <div className="flex-1" />
      <div className="flex items-center gap-2">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
            <HiOutlineSearch className="w-5 h-5" />
          </span>
          <input
            type="text"
            placeholder="Search Tools"
            className="bg-zinc-900 border border-zinc-700 rounded-md pl-10 pr-3 py-2 text-sm text-white placeholder-zinc-400 focus:outline-none focus:border-blue-500 transition-colors w-56"
          />
        </div>
      </div>
    </header>
  );
}
