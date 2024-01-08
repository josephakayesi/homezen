import Image from "next/image";

function TestimonyCard({
  image,
  name,
  comment,
  jobDescription,
  company,
}: Testimony) {
  return (
    <div className="flex flex-col flex-none px-4 py-5 rounded-[24px] max-w-fit bg-white">
      <div className="flex items-center gap-1">
        {Array(5)
          .fill(1)
          .map((_, index) => (
            <Image
              src="/star.svg"
              alt="An image of star"
              width={14}
              height={14}
              key={index}
            />
          ))}
      </div>
      <div className="w-[350px] text-[16px] font-medium pt-2 pb-[14px]">
        {comment}
      </div>
      <div className="flex flex-row justify-between">
        <div className="">
          <div className="text-sm font-semibold">— {name}</div>
          <div className="text-xs font-normal text-gray-400 py-1">
            {jobDescription}, {company}
          </div>
        </div>
        <div>
          <Image src={image} width={40} height={40} />
        </div>
      </div>
    </div>
  );
}

export default TestimonyCard;
