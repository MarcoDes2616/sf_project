import React, {useContext} from "react";
import PrimaryBtn from "./PrimaryBtn";
import MainContext from "../../context/MainContext";
import TokenAnimate from "./TokenAnimate";
import { useNavigate } from "react-router-dom";

const HeadBand = () => {
  const { setOpenModalLogin } =
    useContext(MainContext);
  const navigate = useNavigate()
  const token = localStorage.getItem("token")

  const handdleActionsIconUser = () => {
    if (token) {
      navigate(`/virtual_school/my_courses`)
    } else {
      setOpenModalLogin(true)
    }
  }
  return (
    <div className="headBand_container">
      <div className="headBand_info flex row full-w full-h wrap autoM al-c">
        <div className="flex row al-c jf-c">
        <TokenAnimate>
          <PrimaryBtn btnAction={handdleActionsIconUser}>ESCUELA VIRTUAL</PrimaryBtn>
        </TokenAnimate>
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
