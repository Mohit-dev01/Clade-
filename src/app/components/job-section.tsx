import Link from "next/link";

const JobSection = () => {
  return (
    <>
      <div className="border-y border-[#D9D9D9] ">
        <div className="pl-[100px] py-[21.31px]">
          <div className="flex gap-[72px]">
            <Link
              href="#"
              className="font-normal text-[20px] leading-[25px]  text-[#DC4A2D]"
            >
              Job Preview
            </Link>
            <Link
              href="#"
              className="text-[#888888] font-normal text-[20px] leading-[25px] hover:text-[#DC4A2D]"
            >
              Applicants
            </Link>
            <Link
              href="#"
              className="text-[#888888] font-normal text-[20px] leading-[25px] hover:text-[#DC4A2D]"
            >
              Match
            </Link>
            <Link
              href="#"
              className="text-[#888888] font-normal text-[20px] leading-[25px] hover:text-[#DC4A2D]"
            >
              Messages{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default JobSection;
