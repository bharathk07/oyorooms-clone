import React from "react";
import { StickyNav } from "react-js-stickynav";
import NavbarSticky from "../Home/NavbarSticky";


const Navbar2 = () => {
  const style = () => {
    return (
      <style jsx>{`
        .nav {
          /* transition: all 0.1s linear; */
          position: fixed;
          z-index: 2000;
          padding: 20px;
        }
        .scrollNav {
          /* transition: all 0.5s ease-in; */
          z-index: 2000;
          background: #ffffff;
          width: 100%;
          border-bottom: 1px solid #dddddd;
        }
        .styl {
          padding-top: 80px;
        }
      `}</style>
    );
  };
  return (
    <div className="sticky">
      {style()}
      <StickyNav length="-2">
        <NavbarSticky />
      </StickyNav>
    </div>
  );
};

export { Navbar2 };
