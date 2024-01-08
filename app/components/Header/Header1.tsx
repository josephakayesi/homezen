import Image from "next/image";

// Components
import HeaderWrapper from "./HeaderWrapper";
import Pill from "./Pill";

function Header1() {
  return (
    <HeaderWrapper>
      <div className="flex flex-col text-white pl-12">
        <div className="flex flex-row py-2">
          <Pill imagePath={"/home.svg"} title={"Tailored Homes"} />
          <Pill imagePath={"/heart.svg"} title={"100% Satisfaction"} />
        </div>
        <div className="py-2">
          <h3 className="text-2xl font-bold">
            Your Dream Home, Guaranteed with HomeZen!
          </h3>
        </div>
        <div>
          <p className="text-lg">
            Visualize your dream home against a backdrop of stunning landscapes.
            Join HomeZen to turn this vision into reality
          </p>
        </div>
      </div>
    </HeaderWrapper>
  );
}

export default Header1;
