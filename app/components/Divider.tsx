import React from "react";

function Divider() {
  return (
    <div className="relative flex py-9 items-center">
      <div className="flex-grow border-t border-gray-200"></div>
      <span className="flex-shrink mx-4  text-[12px] font-normal">
        or continue with
      </span>
      <div className="flex-grow border-t border-gray-200"></div>
    </div>
  );
}

export default Divider;
