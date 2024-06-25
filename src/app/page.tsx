import JobPreview from "./components/job-preview";
import JobSection from "./components/job-section";
import Navbar from "./components/navbar";
import Image from "next/image";

export default function Home() {
  const content = [
    {
      image: "/images/1.png",
      heading: "Applicants",
      number: "400",
    },
    {
      image: "/images/user2.png",
      heading: "Matches",
      number: "100",
    },
    {
      image: "/images/user3.png",
      heading: "Messages",
      number: "147",
    },
    {
      image: "/images/user4.png",
      heading: "Views",
      number: "800",
    },
  ];
  return (
    <>
      <div className="w-full">
        {/* Navbar */}
        <div>
          <Navbar />
        </div>
        {/* JobSection */}
        <div>
          <JobSection />
        </div>
        <div className="flex">
          <div className="basis-[1307px] border-y border-r border-[#E7E7E7]  ">
            <JobPreview />
          </div>

          <div className="basis-[421px]">
            <div className="flex flex-col items-center gap-[38.47px] justify-center pt-[36px]">
              <div className="flex flex-col gap-6">
                {/* buttons */}
                <div className="flex gap-4">
                  <button className="flex gap-[10px] border-[0.8px] rounded-[8px] border-[#DC4A2D] items-center py-3 px-[30.5px] bg-[#FEF4F2]">
                    <div>
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 3.03015H13M3 5.53015H18M16.3333 5.53015L15.7489 14.2962C15.6612 15.6114 15.6174 16.269 15.3333 16.7677C15.0833 17.2066 14.706 17.5596 14.2514 17.7799C13.735 18.0302 13.0759 18.0302 11.7578 18.0302H9.24221C7.92409 18.0302 7.26503 18.0302 6.74861 17.7799C6.29396 17.5596 5.91674 17.2066 5.66665 16.7677C5.38259 16.269 5.33875 15.6114 5.25107 14.2962L4.66667 5.53015M8.83333 9.28015V13.4468M12.1667 9.28015V13.4468"
                          stroke="#DC4A2D"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="font-normal text-base text-[#DC4A2D] ">
                      Delete job
                    </div>
                  </button>
                  <button className="flex gap-[10px] items-center py-3 px-[43.5px] border-[2px]  border-[#FED3CA] rounded-[8px] bg-[#DC4A2D]">
                    <div>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5 6.19683L8.83331 3.53016M1.16663 13.8635L3.42287 13.6128C3.69853 13.5822 3.83636 13.5669 3.96519 13.5252C4.07949 13.4882 4.18826 13.4359 4.28855 13.3697C4.4016 13.2952 4.49966 13.1971 4.69578 13.001L13.5 4.19683C14.2364 3.46045 14.2364 2.26654 13.5 1.53016C12.7636 0.79378 11.5697 0.79378 10.8333 1.53016L2.02911 10.3343C1.83299 10.5305 1.73493 10.6285 1.66038 10.7416C1.59425 10.8419 1.54197 10.9506 1.50497 11.0649C1.46326 11.1938 1.44795 11.3316 1.41732 11.6073L1.16663 13.8635Z"
                          stroke="white"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="font-normal text-base text-white before:">
                      Edit job
                    </div>
                  </button>
                </div>
                {/* content */}
                <div className="divide-y">
                  {content.map((item, index) => {
                    return (
                      <>
                        <div key={index} className="border-b border-[#E7E7E7]">
                          <div className="pt-[22px] pl-[22px] pb-7 pr-[22px] flex justify-between">
                            <div className="flex items-center gap-[10px]">
                              <div className="w-[20px]">
                                <div className="aspect-square w-full relative">
                                  <Image
                                    src={item.image}
                                    alt="image"
                                    fill={true}
                                    className="object-cover"
                                  />
                                </div>
                              </div>
                              <div className="font-normal text-base text-[#4F4F4F]">
                                {item.heading}
                              </div>
                            </div>
                            <div className="font-normal text-[20px] leading-[30px] text-[#3D3D3D]">
                              {item.number}
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="pt-8 px-8 pb-9 flex flex-col gap-[48px] border rounded-[12px] shadow-custom-shadow">
                <div className="font-medium text-[20px] leading-[30px]">
                  “A quote from a Atlassian.”
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-[45px]">
                    <div className="w-full aspect-square relative">
                      <Image
                        src="/images/Avatar.png"
                        fill={true}
                        className="object-cover"
                        alt="avatar-img"
                      />
                    </div>
                  </div>
                  <div className="flex gap-[2px] flex-col">
                    <div className="font-medium text-[16px] leading-[24px]">
                      Name
                    </div>
                    <div className="font-medium text-[16px] leading-[24px] text-[#828282]">
                      Description
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
