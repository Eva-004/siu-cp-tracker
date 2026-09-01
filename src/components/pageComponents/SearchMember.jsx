
"use client";

import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchMember({ value, onChange }) {
  return (
    <div className="relative w-full md:w-64">
      <FaSearch
        size={15}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search member..."
        className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#0783a3] focus:ring-2 focus:ring-[#0783a3]/10 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder:text-gray-500"
      />
    </div>
  );
}

