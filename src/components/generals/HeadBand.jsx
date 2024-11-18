import React from "react";
import PrimaryBtn from "./PrimaryBtn";

const HeadBand = () => {
  return (
    <div className="headBand_container">
      <div className="headBand_info flex row full-w full-h wrap autoM al-c">
        <div className="flex row al-c jf-c">
          <PrimaryBtn>ESCUELA VIRTUAL</PrimaryBtn>
        </div>
          <a className="flex row x-big" href="https://t.me/Tradingsinfrontera">
            <i className="bx bxl-telegram bx-md" />
            <p>@Tradingsinfrontera</p>
          </a>
          <a className="flex row x-big" href="https://www.instagram.com/trading_sinfrontera?igsh=MWhoeDM0MTRpeWZ4Yw==">
            <i className="bx bxl-instagram bx-md" />
            <p>@trading_sinfrontera</p>
          </a>
      </div>
    </div>
  );
};

export default HeadBand;
