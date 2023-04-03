import React from "react";
import { useTheme } from "../features/theme";
import logo from "../assets/logo.png";
import NewsLetter from "./newsletter";
import { FiLinkedin, FiFacebook, FiInstagram } from "react-icons/fi";

function Footer() {
  const theme = useTheme();
  return (
    <footer
      style={{ background: theme.background, color: theme.text }}
      className="w-full pt-[15vh] pb-[10vh] px-1 relative"
    >
      <div className="max-w-5xl w-full mx-auto grid grid-cols-5 justify-around items-center">
        <img src={logo} alt="RY" className="block mx-auto col-span-2 w-1/5" />
        <div className="col-span-1"></div>
        <div className="col-span-2">
          <div className="flex items-center justify-start px-4">
            <div
              className="rounded-full border p-2 mx-1 cursor-pointer relative before:rounded-full before:inset-0 before:bg-[#45a29e] before:absolute before:scale-0 before:opacity-0 hover:before:opacity-50 hover:before:scale-100 before:duration-300"
              style={{ color: theme.text, borderColor: theme.text }}
            >
              <FiFacebook size={25} />
            </div>
            <div
              className="rounded-full border p-2 mx-1 cursor-pointer relative before:rounded-full before:inset-0 before:bg-[#45a29e] before:absolute before:scale-0 before:opacity-0 hover:before:opacity-50 hover:before:scale-100 before:duration-300"
              style={{ color: theme.text, borderColor: theme.text }}
            >
              <FiInstagram size={25} />
            </div>
            <div
              className="rounded-full border p-2 mx-1 cursor-pointer relative before:rounded-full before:inset-0 before:bg-[#45a29e] before:absolute before:scale-0
              before:opacity-0 hover:before:opacity-50 hover:before:scale-100 before:duration-300"
              style={{ color: theme.text, borderColor: theme.text }}
            >
              <FiLinkedin size={25} />
            </div>
          </div>
          <p style={{ color: theme.secondary }}>
            Copyright: 2023. All Rights Reserved By Ranim <br></br>
            <span className="font-bold">Thank you for attention</span>
          </p>
        </div>
      </div>
      <NewsLetter />
    </footer>
  );
}

export default Footer;
