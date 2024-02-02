import india from "../../assets/India.png";
import "./responsive.css";

const Footer = () => {
  return (
    <>
      <div className="footer flex  flex-col items-center capitalize mx-4 px-4">
        <h3 className=" text-center">Copyright © 2023 LeetCode</h3>
        <ul className="flex">
          <li className="px-2">help centre|</li>
          <li className="px-2">students|</li>
          <li className="px-2">terms|</li>
          <li className="px-2">privacy policy</li>
        </ul>
        <div className="end flex justify-center items-center px-3 my-2">
          <img src={india} alt="indian flag" className="rounded-full h-9 w-9" />
          <h1 className="px-2">India</h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
