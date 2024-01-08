import Image from "next/image";

// Components
import HeaderWrapper2 from "./HeaderWrapper2";
import Pill from "./Pill";

function Header3() {
  return (
    <HeaderWrapper2>
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
    </HeaderWrapper2>
  );
}

export default Header3;
