import React from "react";
import RightDrawer from "./RightDrawer";

const MidCols = () => {
  return (
    <>
      <div className="flex flex-row space-x-80">
        {/* Navbar */}
        <div>
          <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul class="flex flex-wrap -mb-px">
              <li class="mr-2">
                <a
                  href="#"
                  class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  List
                </a>
              </li>
              <li class="mr-2">
                <a
                  href="#"
                  class="inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
                  aria-current="page"
                >
                  Board
                </a>
              </li>
              <li class="mr-2">
                <a
                  href="#"
                  class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  Timeline
                </a>
              </li>
              <li class="mr-2">
                <a
                  href="#"
                  class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  Reports
                </a>
              </li>
              <li class="mr-2">
                <a
                  href="#"
                  class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  Notes
                </a>
              </li>
              <li class="mr-2">
                <a
                  href="#"
                  class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  Files
                </a>
              </li>
              {/* <li>
                <a class="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
                  Disabled
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        {/* Navbar end */}
        <div>
          <RightDrawer />
        </div>
      </div>
    </>
  );
};

export default MidCols;
