import React from "react";

function CategoryFilter({ category, setCategory }) {
  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="w-full md:w-1/4 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="All">All Categories</option>
      <option value="Category A">Category A</option>
      <option value="Category B">Category B</option>
      <option value="Category C">Category C</option>
    </select>
  );
}

export default CategoryFilter;
