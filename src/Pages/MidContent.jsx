import { useState, useEffect } from "react";
import { Image1, Image2, Image3, Image4 } from "../constant";
import HomeFooter from "./HomeFooter";
import { problems } from "./constant";
import { FcCancel } from "react-icons/fc";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { IoMdCloseCircle } from "react-icons/io";
import YoutubeEmbed from "../Componets/YoutubeModal/YoutubeEmbed";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MidContent = () => {
  const [modalVisibile, setIsVisible] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the width as needed
    };

    checkScreenWidth();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenWidth);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return (
    <>
      <div className="bg-[#1A1A1A] ">
        {/* top images */}
        <div className=" flex items-center justify-center mx-5 py-10 px-4">
          {isMobile ? (
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={2}
              navigation
              pagination={{ clickable: true }}
              // onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <img src={Image1} className="h-26 w-56 mx-2 rounded-lg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Image2} className="h-26 w-56 mx-2 rounded-lg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Image3} className="h-26 w-56 mx-2 rounded-lg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Image4} className="h-24 w-54 mx-2 rounded-lg " />
              </SwiperSlide>
              ...
            </Swiper>
          ) : (
            <>
              <img src={Image1} className="h-26 w-56 mx-2 rounded-lg" />
              <img src={Image2} className="h-26 w-56 mx-2 rounded-lg" />
              <img src={Image3} className="h-26 w-56 mx-2 rounded-lg" />
              <img src={Image4} className="h-26 w-56 mx-2 rounded-lg " />
            </>
          )}
        </div>

        {/* mid text */}
        <h1 className="text-white text-center text-lg font-bold">
          “ QUALITY OVER QUANTITY ” 👇
        </h1>

        {/* problem table start */}

        <div className="overflow-x-auto">
          <table className="w-full max-w-full sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] text-white mx-auto">
            <thead className="uppercase text-xs font-thin border-b">
              <tr className="text-white">
                <th className="p-3 sm:mx-2 md:mx-5 text-center">Status</th>
                <th className="p-3 sm:mx-2 md:mx-5 text-center">Title</th>
                <th className="p-3 sm:mx-2 md:mx-5 text-center">Difficulty</th>
                <th className="p-3 sm:mx-2 md:mx-5 text-center">Category</th>
                <th className="p-3 sm:mx-2 md:mx-5 text-center">Solution</th>
              </tr>
            </thead>
            <tbody className="text-white w-full">
              {problems.map((items, index) => {
                // console.log(items.id);
                // color of the questions
                const questionColor =
                  items.difficulty.toLowerCase() === "easy"
                    ? "green"
                    : items.difficulty.toLowerCase() === "medium"
                    ? "gold"
                    : items.difficulty.toLowerCase() === "hard"
                    ? "red"
                    : "defaultColor";

                return (
                  <tr
                    key={items.id}
                    className={`${index % 2 === 1 ? "bg-[#282828]" : ""} `}
                  >
                    <td className="p-4 mx-5 flex items-center justify-center">
                      <FcCancel />
                    </td>
                    {/* <Link to='/problems/{items.id}'> */}
                    <td className="p-4 mx-5 text-center hover:text-blue-500 ">
                      <Link to={`/problems/${items.id}`}>{items.title}</Link>
                    </td>
                    {/* </Link> */}

                    <td
                      className="p-4 mx-5 text-center"
                      style={{ color: questionColor }}
                    >
                      {items.difficulty}
                    </td>
                    <td className="p-4 mx-5 text-center">{items.category}</td>
                    <td
                      className="flex justify-center items-center"
                      onClick={() => {
                        setIsVisible(true);
                        setVideoId(items.videoId);
                      }}
                    >
                      <PiYoutubeLogoFill className="h-6 w-6 hover:text-red-700" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {modalVisibile && (
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="modalContent bg-black">
              <IoMdCloseCircle
                className="h-8 w-8 absolute text-white cursor-pointer"
                onClick={() => setIsVisible(false)}
              />
              <YoutubeEmbed videoId={videoId} />
            </div>
          </div>
        )}

        <HomeFooter />
      </div>
    </>
  );
};

export default MidContent;
