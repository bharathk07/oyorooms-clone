import { RangeDatePicker } from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";
import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

const SearchField=()=> {
  const history = useHistory();
  const [roomCounter, setroomCounter] = useState(1);
  const [rooms, setrooms] = useState(false);
  const [roomsNum, setroomsNum] = useState(1);

  const handleRoomDIv = () => {
    setrooms(true);
  };
  // console.log(startDate);
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
      <div className="red-rectangle">
        <p className="heading-red-rectangle">
          Over 157,000 hotels and homes across 35 countries
        </p>
        <img src="/Images/redRectangle.png" alt="redRectangle" />
        <div className="search-field">
          <input
            type="text"
            placeholder="Search by city, hotel or neighbourhood"
          />
          <RangeDatePicker
            startDate={new Date(2022, 8, 10)}
            endDate={new Date(2022, 9, 1)}
            minDate={new Date(1900, 0, 1)}
            maxDate={new Date(2100, 0, 1)}
          />
          <div className="rooms">
            <button onClick={handleLinkClick}>Search</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchField;
