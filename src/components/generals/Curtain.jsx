import React, { useEffect } from "react";

const Curtain = ({ children, open }) => {

  return <div className={open ? "curtain" : "curtain hide"}>{children}</div>;
};

export default Curtain;
