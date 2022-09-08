import { RangeDatePicker } from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";
import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

const NavbarSticky =()=> {
  const history = useHistory();
  const [roomCounter, setroomCounter] = useState(1);
  const [rooms, setrooms] = useState(false);
  const [roomsNum, setroomsNum] = useState(1);
  const [date, setonDateChange] = useState("");
  const handleRoomDIv = () => {
    setrooms(true);
  };
  console.log(date);
  let roomRef = useRef();

  const handleLinkClick = () => {
    history.push("/hotels");
  };

  useEffect(() => {
    let handler = (event) => {
      if (roomRef.current && !roomRef.current.contains(event.target)) {
        setrooms(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <>
      <header className="nav-sticky">
        <img
          onClick={() => {
            history.push("/");
          }}
          src="/Images/Union.png"
          alt="Union"
        />
        <div className="nav-sticky-container">
          <input
            type="text"
            placeholder="Search by city, hotel or neighbourhood"
          />
          <RangeDatePicker
            startDate={new Date(2020, 0, 15)}
            endDate={new Date(2020, 1, 1)}
            onChange={(startDate, endDate) =>
              setonDateChange(startDate, endDate)
            }
            minDate={new Date(1900, 0, 1)}
            maxDate={new Date(2100, 0, 1)}
          />
          <div className="rooms">
          <button onClick={handleLinkClick} style={{ width: "130px", height: "48px" }}>Search</button>
          </div>
          
        </div>
      </header>
    </>
  );
}

export default NavbarSticky;
