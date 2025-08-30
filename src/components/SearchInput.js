// src/components/SearchInput.js
import React from "react";

const SearchInput = ({ value, onChange }) => (
  <div className="mb-6">
    <input
      type="text"
      placeholder="🔍 Cari todo..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 
                 text-gray-100 placeholder-gray-400 
                 focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-md"
    />
  </div>
);

export default SearchInput;
