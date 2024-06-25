import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="pl-10 pr-6 py-6  ">
      <div className="flex justify-between">
        {/* logo */}
        <Link
          href="#"
          className="font-bold text-[20px] leading-[27px] flex items-center justify-center px-[26.5px] text-[#DC4A2D] bg-[#E7E7E7]"
        >
          Logo
        </Link>

        {/* mid */}
        <div className="flex items-center gap-[19px] ">
          {/* jobs */}
          <div className="flex items-center gap-2 py-4 px-[15px] bg-[#DC4A2D] border-[2px] rounded-[49px] border-[#FCB4A5] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]">
            {/* svg */}
            <div>
              <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 19.5V5.5C7 4.57003 7 4.10504 7.10222 3.72354C7.37962 2.68827 8.18827 1.87962 9.22354 1.60222C9.60504 1.5 10.07 1.5 11 1.5C11.93 1.5 12.395 1.5 12.7765 1.60222C13.8117 1.87962 14.6204 2.68827 14.8978 3.72354C15 4.10504 15 4.57003 15 5.5V19.5M4.2 19.5H17.8C18.9201 19.5 19.4802 19.5 19.908 19.282C20.2843 19.0903 20.5903 18.7843 20.782 18.408C21 17.9802 21 17.4201 21 16.3V8.7C21 7.57989 21 7.01984 20.782 6.59202C20.5903 6.21569 20.2843 5.90973 19.908 5.71799C19.4802 5.5 18.9201 5.5 17.8 5.5H4.2C3.07989 5.5 2.51984 5.5 2.09202 5.71799C1.71569 5.90973 1.40973 6.21569 1.21799 6.59202C1 7.01984 1 7.57989 1 8.7V16.3C1 17.4201 1 17.9802 1.21799 18.408C1.40973 18.7843 1.71569 19.0903 2.09202 19.282C2.51984 19.5 3.0799 19.5 4.2 19.5Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="font-medium text-[20px] leading-[27px] text-white">
              Jobs
            </div>
          </div>

          <div className="pt-6 pb-[25px] pl-[46px] pr-[32.5px] border-[0.5px] border-[#D1D1D1] rounded-[36px] shadow-custom-inset">
            <div className="flex ">
              {/* messages */}
              <Link href="#" className="flex items-center gap-2">
                {/* svg */}
                <div className="relative">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 8.3C3 6.61984 3 5.77976 3.32698 5.13803C3.6146 4.57354 4.07354 4.1146 4.63803 3.82698C5.27976 3.5 6.11984 3.5 7.8 3.5H16.2C17.8802 3.5 18.7202 3.5 19.362 3.82698C19.9265 4.1146 20.3854 4.57354 20.673 5.13803C21 5.77976 21 6.61984 21 8.3V13.7C21 15.3802 21 16.2202 20.673 16.862C20.3854 17.4265 19.9265 17.8854 19.362 18.173C18.7202 18.5 17.8802 18.5 16.2 18.5H9.68375C9.0597 18.5 8.74767 18.5 8.44921 18.5613C8.18443 18.6156 7.9282 18.7055 7.68749 18.8285C7.41617 18.9671 7.17252 19.162 6.68521 19.5518L4.29976 21.4602C3.88367 21.7931 3.67563 21.9595 3.50054 21.9597C3.34827 21.9599 3.20422 21.8906 3.10923 21.7716C3 21.6348 3 21.3684 3 20.8355V8.3Z"
                      stroke="#B0B0B0"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="absolute right-0 top-[-1px] w-[6px] h-[6px] rounded-full text-[#DC4A2D]"></div>
                </div>
                <div className="font-medium text-[20px] leading-[27px] text-[#B0B0B0]">
                  Messages
                </div>
              </Link>
              {/* payments */}
              <Link href="#" className="ml-[81px] mr-[40.5px]">
                <div className="flex gap-2 items-center ">
                  {/* svg */}
                  <div>
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.5295 9.09661C12.9571 9.5047 12.2566 9.74475 11.5 9.74475C9.567 9.74475 8 8.17775 8 6.24475C8 4.31175 9.567 2.74475 11.5 2.74475C12.753 2.74475 13.8522 3.40317 14.4705 4.39289M6 20.8319H8.61029C8.95063 20.8319 9.28888 20.8724 9.61881 20.9534L12.3769 21.6236C12.9753 21.7694 13.5988 21.7836 14.2035 21.6662L17.253 21.0729C18.0585 20.9159 18.7996 20.5302 19.3803 19.9653L21.5379 17.8665C22.154 17.2681 22.154 16.2972 21.5379 15.6978C20.9832 15.1582 20.1047 15.0974 19.4771 15.5551L16.9626 17.3896C16.6025 17.6528 16.1643 17.7946 15.7137 17.7946H13.2855L14.8311 17.7945C15.7022 17.7945 16.4079 17.1081 16.4079 16.2607V15.9539C16.4079 15.2503 15.9156 14.6367 15.2141 14.4666L12.8286 13.8865C12.4404 13.7923 12.0428 13.7448 11.6431 13.7448C10.6783 13.7448 8.93189 14.5436 8.93189 14.5436L6 15.7696M20 7.24475C20 9.17775 18.433 10.7448 16.5 10.7448C14.567 10.7448 13 9.17775 13 7.24475C13 5.31175 14.567 3.74475 16.5 3.74475C18.433 3.74475 20 5.31175 20 7.24475ZM2 15.3448L2 21.1448C2 21.7048 2 21.9848 2.10899 22.1987C2.20487 22.3869 2.35785 22.5399 2.54601 22.6358C2.75992 22.7447 3.03995 22.7448 3.6 22.7448H4.4C4.96005 22.7448 5.24008 22.7448 5.45399 22.6358C5.64215 22.5399 5.79513 22.3869 5.89101 22.1987C6 21.9848 6 21.7048 6 21.1448V15.3448C6 14.7847 6 14.5047 5.89101 14.2908C5.79513 14.1026 5.64215 13.9496 5.45399 13.8537C5.24008 13.7448 4.96005 13.7448 4.4 13.7448L3.6 13.7448C3.03995 13.7448 2.75992 13.7448 2.54601 13.8537C2.35785 13.9496 2.20487 14.1026 2.10899 14.2908C2 14.5047 2 14.7847 2 15.3448Z"
                        stroke="#B0B0B0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="font-normal text-[20px] leading-[25px] text-[#B0B0B0] ">
                    Payments
                  </div>
                </div>
              </Link>

              {/* application */}
              <Link href="#" className="flex items-center gap-2">
                {/* icon */}
                <div>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.5 21.7448V19.7448C22.5 17.8809 21.2252 16.3148 19.5 15.8708M16 4.03551C17.4659 4.6289 18.5 6.06606 18.5 7.74475C18.5 9.42344 17.4659 10.8606 16 11.454M17.5 21.7448C17.5 19.881 17.5 18.9491 17.1955 18.214C16.7895 17.2339 16.0108 16.4552 15.0307 16.0492C14.2956 15.7448 13.3638 15.7448 11.5 15.7448H8.5C6.63623 15.7448 5.70435 15.7448 4.96927 16.0492C3.98915 16.4552 3.21046 17.2339 2.80448 18.214C2.5 18.9491 2.5 19.881 2.5 21.7448M14 7.74475C14 9.95389 12.2091 11.7448 10 11.7448C7.79086 11.7448 6 9.95389 6 7.74475C6 5.53561 7.79086 3.74475 10 3.74475C12.2091 3.74475 14 5.53561 14 7.74475Z"
                      stroke="#B0B0B0"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="font-normal text-[20px] leading-[25px] text-[#B0B0B0] ">
                  Application
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="flex gap-4 items-center">
          <Link href="#">
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.6666 28.5723H13.3333M23.9999 11.239C23.9999 9.11722 23.1571 7.08239 21.6568 5.5821C20.1565 4.08181 18.1217 3.23895 15.9999 3.23895C13.8782 3.23895 11.8434 4.08181 10.3431 5.5821C8.8428 7.08239 7.99994 9.11722 7.99994 11.239C7.99994 15.3592 6.96057 18.1802 5.7995 20.0462C4.82011 21.6201 4.33042 22.4071 4.34838 22.6266C4.36826 22.8697 4.41976 22.9624 4.61564 23.1077C4.79256 23.239 5.59006 23.239 7.18508 23.239H24.8148C26.4098 23.239 27.2073 23.239 27.3842 23.1077C27.5801 22.9624 27.6316 22.8697 27.6515 22.6266C27.6695 22.4071 27.1798 21.6201 26.2004 20.0462C25.0393 18.1802 23.9999 15.3592 23.9999 11.239Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
          <div className="flex gap-[6px] items-center cursor-pointer">
            <div className="w-[40px]">
              <div className="aspect-square w-full relative">
                <Image
                  alt="navbar"
                  src="/images/Rectangle-5.png"
                  fill={true}
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 8.07227L10 13.0723L15 8.07227"
                  stroke="black"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
