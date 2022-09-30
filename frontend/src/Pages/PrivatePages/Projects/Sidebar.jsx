import React from "react";

const Sidebar = () => {
  return (
    <div>
      <aside class="w-64 ml-4" aria-label="Sidebar">
        <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
          <h2 className="text-sm font-extrabold text-gray-500 mt-4 mb-6">
            MY TASKS
          </h2>
        </div>
        <h2 className=" font-bold text-lg mt-4 mb-6">Projects</h2>
      </aside>
    </div>
  );
};

export default Sidebar;
