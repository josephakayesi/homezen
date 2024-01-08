import Image from "next/image";

function LogoHeader() {
  return (
    <div className="flex gap-2 text-xl font-bold items-center pt-16">
      <Image src="/icon.svg" alt="Homezen logo" width={24} height={24} />
      <Image
        src="/logo-text.svg"
        alt="Homezen logo text"
        width={110}
        height={17}
      />
    </div>
  );
}

export default LogoHeader;
