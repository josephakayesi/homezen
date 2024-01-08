import React from "react";
import Image from "next/image";

type PillProps = {
  imagePath: string;
  title: string;
};

function Pill({ imagePath, title }: PillProps) {
  return (
    <span className="text-white text-sm font-normal inline-flex items-center px-4 py-3 gap-2 rounded-full me-2 dark:bg-gray-700 dark:text-gray-400 border border-white ">
      <Image src={imagePath} alt="Homezen logo" width={20} height={20} />
      {title}
    </span>
  );
}

export default Pill;
