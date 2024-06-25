import Image from "next/image";
import Link from "next/link";

const JobPreview = () => {
  return (
    <>
      <div className="pt-[36px] pb-[23px] pl-[100px]">
        <div className="flex flex-col gap-6">
          {/* div-1 */}
          <div className="flex gap-7 items-center">
            <div className="font-poppins font-bold text-[35px] leading-[52.5px] text-[#3D3D3D]">
              Senior Product Designer
            </div>
            <div className="flex gap-3 items-center">
              <div className="font-poppins font-normal text-[14px] leading-[21px] text-[#888888]">
                posted 2 days ago
              </div>
              <div className="flex items-center gap-1 px-2 bg-[#ECFDF3] rounded-full">
                <div className="">
                  <svg
                    width="8"
                    height="9"
                    viewBox="0 0 8 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="4" cy="4.03015" r="3" fill="#17B26A" />
                  </svg>
                </div>
                <div className="font-poppins font-medium text-[12px] leading-[18px] text-[#067647]">
                  Open
                </div>
              </div>
            </div>
          </div>
          {/* div-2 */}
          <div className="flex gap-9 ">
            <div className="flex items-center gap-2">
              <div>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 13.5302C13.6569 13.5302 15 12.187 15 10.5302C15 8.8733 13.6569 7.53015 12 7.53015C10.3431 7.53015 9 8.8733 9 10.5302C9 12.187 10.3431 13.5302 12 13.5302Z"
                    stroke="#5D5D5D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 22.5302C16 18.5302 20 14.9484 20 10.5302C20 6.11187 16.4183 2.53015 12 2.53015C7.58172 2.53015 4 6.11187 4 10.5302C4 14.9484 8 18.5302 12 22.5302Z"
                    stroke="#5D5D5D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="font-poppins font-normal text-[20px] leading-[30px] text-[#5D5D5D]">
                Delaware, USA
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 5.53015C13 6.63472 10.5376 7.53015 7.5 7.53015C4.46243 7.53015 2 6.63472 2 5.53015M13 5.53015C13 4.42558 10.5376 3.53015 7.5 3.53015C4.46243 3.53015 2 4.42558 2 5.53015M13 5.53015V7.03015M2 5.53015V17.5302C2 18.6347 4.46243 19.5302 7.5 19.5302M7.5 11.5302C7.33145 11.5302 7.16468 11.5274 7 11.522C4.19675 11.4301 2 10.5734 2 9.53015M7.5 15.5302C4.46243 15.5302 2 14.6347 2 13.5302M22 12.0302C22 13.1347 19.5376 14.0302 16.5 14.0302C13.4624 14.0302 11 13.1347 11 12.0302M22 12.0302C22 10.9256 19.5376 10.0302 16.5 10.0302C13.4624 10.0302 11 10.9256 11 12.0302M22 12.0302V19.5302C22 20.6347 19.5376 21.5302 16.5 21.5302C13.4624 21.5302 11 20.6347 11 19.5302V12.0302M22 15.7802C22 16.8847 19.5376 17.7802 16.5 17.7802C13.4624 17.7802 11 16.8847 11 15.7802"
                    stroke="#5D5D5D"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="font-poppins font-normal text-[20px] leading-[30px] text-[#5D5D5D]">
                $300k-$400k
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-[#E7E7E7]">
        <div className="pt-8 pb-6 pl-[100px]">
          <div className="flex gap-[64px] items-start">
            <div className="flex flex-col gap-2 pr-[38.59px]">
              <div className="font-normal text-[14px] leading-[21px] text-[#6E6D6D]">
                Skills Required
              </div>
              <div className="py-1 px-[6px] rounded-sm border bg-[#F9F9F9] border-[#D0D5DD] shadow-custom-insett flex gap-1 w-fit">
                <div className="w-[16px]">
                  <div className="relative w-full aspect-square">
                    <Image
                      fill={true}
                      src="/images/image1.png"
                      alt="figma-image"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="font-normal text-[12px] leading-[18px] text-[#344054]">
                  Figma
                </div>
              </div>
              <div className="py-1 px-[6px] rounded-sm border bg-[#F9F9F9] border-[#D0D5DD] shadow-custom-insett flex gap-1 w-fit">
                <div className="w-[16px]">
                  <div className="relative w-full aspect-square">
                    <Image
                      fill={true}
                      src="/images/image2.png"
                      alt="figma-image"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="font-normal text-[12px] leading-[18px] text-[#344054]">
                  Adobe Illustrator
                </div>
              </div>
              <div className="py-1 px-[6px] rounded-sm border bg-[#F9F9F9] border-[#D0D5DD] shadow-custom-insett flex gap-1 w-fit">
                <div className="w-[16px]">
                  <div className="relative w-full aspect-square">
                    <Image
                      fill={true}
                      src="/images/image6.png"
                      alt="figma-image"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="font-normal text-[12px] leading-[18px] text-[#344054]">
                  Adobe XD
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 pr-[31px] ">
              <div className="font-normal text-[14px] leading-[21px] text-[#6E6D6D]">
                Preferred Language
              </div>
              <div className="font-normal text-base text-[#3D3D3D]">
                {" "}
                English
              </div>
            </div>
            <div className="flex flex-col gap-2 pr-[100px]">
              <div className="font-normal text-[14px] leading-[21px] text-[#6E6D6D]">
                Type
              </div>
              <div className="font-normal text-base text-[#3D3D3D]">
                {" "}
                Full Time
              </div>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="font-normal text-[14px] leading-[21px] text-[#6E6D6D]">
                Years of Experience
              </div>
              <div className="font-normal text-base text-[#3D3D3D]">
                3+ Years of Experience
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="pt-8 pb-[30px] pl-[100px] flex flex-col gap-2">
          <div className="font-normal text-[14px] leading-[21px] text-[#6E6D6D]">
            About the job
          </div>
          <ul className="flex flex-col gap-2 list-decimal font-normal text-[16px] leading-[28px]">
            <li>Handle the UI/UX research design</li>
            <li>
              Work on researching on latest web applications designs & trends
            </li>
            <li>Work on conceptualizing and visualizing</li>
            <li>
              {" "}
              Work on creating graphics content and other graphic related works
              <ul className="">
                Benefits:
                <li className="pl-[15px] flex items-center gap-2">
                  <div className="rounded-full w-1 bg-black h-1"></div>{" "}
                  <div>Health Insurance</div>
                </li>
                <li className="pl-[15px] flex items-center gap-2">
                  <div className="rounded-full w-1 bg-black h-1"></div>{" "}
                  <div>Provident Fund</div>
                </li>
              </ul>
              <ul className="">
                Schedule:
                <li className="pl-[15px] flex items-center gap-2">
                  <div className="rounded-full w-1 bg-black h-1"></div>{" "}
                  <div>Day shift</div>
                </li>
              </ul>
              <ul className="">
                Supplemental pay types:
                <li className="pl-[15px] flex items-center gap-2">
                  <div className="rounded-full w-1 bg-black h-1"></div>{" "}
                  <div>Performance bonus...</div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-y border-[#E7E7E7]">
        <div className="py-[38.47px] pl-[100px] flex flex-col gap-4">
          {/* div-1 */}
          <div className="flex gap-[13px] items-center">
            <div className="flex gap-3 items-center">
              <div className="w-[40px]">
                <div className="w-full relative aspect-square">
                  <Image
                    src="/images/Rectangle43.png"
                    fill={true}
                    className="object-cover"
                    alt="Atlassian-img"
                  />
                </div>
              </div>
              <div className="font-normal text-[20px] leading-[30px] text-[#4F4F4F]">
                Atlassian
              </div>
            </div>
            <div className="py-[4.5px] px-[15px] font-bold text-[11px] leading-[16.5px] text-[#003788] rounded-[8px] bg-[#E0EBF9] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
              Follow
            </div>
          </div>

          {/* div-2 */}
          <div className="grid grid-cols-2 gap-x-[48px] gap-y-[24px]">
            <div className="flex flex-col gap-2">
              <div className="font-normal text-[14px] leading-[21px] text-[#6E6D6D]">
                Company size
              </div>
              <div className="font-normal text-[16px] leading-[24px] text-[#3D3D3D]">
                1k - 2k Employees
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-normal text-[14px] leading-[21px] text-[#6E6D6D]">
                Type
              </div>
              <div className="font-normal text-[16px] leading-[24px] text-[#3D3D3D]">
                Private
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-normal text-[14px] leading-[21px] text-[#6E6D6D]">
                Sector
              </div>
              <div className="font-normal text-[16px] leading-[24px] text-[#3D3D3D]">
                Information Technology, Infrastructure
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-normal text-[14px] leading-[21px] text-[#6E6D6D]">
                Funding
              </div>
              <div className="font-normal text-[16px] leading-[24px] text-[#3D3D3D]">
                Bootstrapped
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-normal text-[14px] leading-[21px] text-[#6E6D6D]">
                Founded In
              </div>
              <div className="font-normal text-[16px] leading-[24px] text-[#3D3D3D]">
                2019
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-normal text-[14px] leading-[21px] text-[#6E6D6D]">
                Founded By
              </div>
              <div className="font-normal text-[16px] leading-[24px] text-[#3D3D3D]">
                Scott Farquhar, Mike Cannon-Brookes
              </div>
            </div>
          </div>

          <Link
            href="#"
            className="mt-[23px] font-normal text-[12px] leading-[18px] text-[#B0B0B0] underline"
          >
            Report this listing
          </Link>
        </div>
      </div>
    </>
  );
};
export default JobPreview;
