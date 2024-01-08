import React from "react";

function HeaderWrapper2({ children }: { children: React.ReactNode }) {
  return (
    <div className=" w-2/4 bg-[url('/home-background.webp')] bg-cover bg-no-repeat bg-center rounded-t-[80px] rounded-b-[20px] mt-24 mb-12 mr-24">
      <div className="flex flex-col h-[90%] justify-end">{children}</div>
    </div>
  );
}

export default HeaderWrapper2;
