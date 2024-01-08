import Image from "next/image";
import SignUp from "./components/SignUp";

import Header1 from "./components/Header/Header1";
import Header2 from "./components/Header/Header2";
import Header3 from "./components/Header/Header3";

export default function Home() {
  return (
    <main className="flex flex-row justify-between min-h-screen">
      <SignUp />
      <Header1 />
    </main>
  );
}
