import Image from "next/image";
import SignUp from "../components/SignUp";

import Header3 from "../components/Header/Header3";

export default function Page() {
  return (
    <main className="flex flex-row justify-between min-h-screen">
      <SignUp />
      <Header3 />
    </main>
  );
}
