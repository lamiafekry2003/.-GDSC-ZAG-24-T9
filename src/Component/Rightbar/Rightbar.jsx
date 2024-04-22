import { ArrowDropDown } from "@mui/icons-material"
import React from "react";
import Recommendation from "../Recommendation/Recommendation"
// import "./rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper" style={{borderLeft:'1px solid lightgrey',paddingLeft:'20px'}}>
        <Recommendation type="user" />
        <Recommendation type="popular" />
        <Recommendation type="editor" />
        <button className="rightButton">
          See More
          <ArrowDropDown />
        </button>
      </div>
    </div>
  );
}