import Image from "next/image";
import SignUp from "../components/SignUp";

import Header2 from "../components/Header/Header2";

export default function Page() {
  return (
    <main className="flex flex-row justify-between min-h-screen">
      <SignUp />
      <Header2 />
    </main>
  );
}
