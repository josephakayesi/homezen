import React from "react";

function HeaderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className=" w-2/4 bg-[url('/home-background.webp')] bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col h-[90%] justify-end">{children}</div>
    </div>
  );
}

export default HeaderWrapper;
