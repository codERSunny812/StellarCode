import { useState } from "react";
import { Image1, Image2, Image3, Image4 } from "../constant";
import HomeFooter from "./HomeFooter";
import { problems } from "./constant";
import { FcCancel } from "react-icons/fc";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { IoMdCloseCircle } from "react-icons/io";

import YoutubeEmbed from "../Componets/YoutubeModal/YoutubeEmbed";
import { Link } from "react-router-dom";

const MidContent = () => {
  const [modalVisibile, setIsVisible] = useState(false);
  const [videoId , setVideoId] = useState(null);
  return (
    <>
      <div className="bg-[#1A1A1A] ">
        {/* top images */}
        <div className=" flex items-center justify-center mx-5 py-10 px-4">
          <img src={Image1} className="h-26 w-56 mx-2 rounded-lg" />
          <img src={Image2} className="h-26 w-56 mx-2 rounded-lg" />
          <img src={Image3} className="h-26 w-56 mx-2 rounded-lg" />
          <img src={Image4} className="h-26 w-56 mx-2 rounded-lg " />
        </div>
          
          {/* mid text */}
        <h1 className="text-white text-center text-lg font-bold">
          “ QUALITY OVER QUANTITY ” 👇
        </h1>

        {/* problem table start */}

        <div className="pb-10 my-4 flex justify-center items-center">
          <table className=" w-full max-w-[1200px] text-white px-12">
            <thead className="uppercase text-xs font-thin border-b">
              <tr className="text-white">
                <th className="p-3 mx-5 text-center">Status</th>
                <th className="p-3 mx-5 text-center">Title</th>
                <th className="p-3 mx-5 text-center">Difficulty</th>
                <th className="p-3 mx-5 text-center">Category</th>
                <th className="p-3 mx-5 text-center">Solution</th>
              </tr>
            </thead>
            <tbody className=" text-white w-full">
              {problems.map((items, index) => {
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
                      <Link to={`/problems/${items.id}`}>
                        {items.title}
                        </Link>
                       
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
                      onClick={()=>{
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
          <div className=" absolute top-96 left-[30%]  w-[650px] h-[350px] flex justify-center items-center">
            {/* // if the user has clicked on view solution button, show a modal with youtube video in it */}
            <div className="modalContent shadow-3xl rounded-xl bg-black">
              <IoMdCloseCircle
                className="h-8 w-8 absolute left-[90%]"
                color="white"
                onClick={() => setIsVisible(false)}
              />
              <YoutubeEmbed  videoId={videoId} />
            </div>
          </div>
        )}

        <HomeFooter />
      </div>
    </>
  );
};

export default MidContent;
