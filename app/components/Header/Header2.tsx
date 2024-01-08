import Image from "next/image";

import HeaderWrapper from "./HeaderWrapper";

import { TESTIMONIES, Testimony } from "@/constants";

import TestimonyCard from "./TestimonyCard";

function Header2() {
  return (
    <HeaderWrapper>
      <div className="flex flex-row gap-4 overflow-x-scroll pl-12 no-scrollbar">
        {TESTIMONIES.map(
          (testimony): Testimony => (
            <TestimonyCard
              key={Math.random()}
              image={testimony.image}
              name={testimony.name}
              comment={testimony.comment}
              jobDescription={testimony.jobDescription}
              company={testimony.company}
            />
          )
        )}
      </div>
    </HeaderWrapper>
  );
}

export default Header2;
