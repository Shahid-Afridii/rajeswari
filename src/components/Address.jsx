import React from "react";

const Address = () => {
  return (
    <>
      {/* <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Address Point</span>1/71 VILANTHAGANDAM MAIN ROAD,CHOLAPURAM-612503
      </p> */}
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">mail me</span>{" "}
        <a href="mailto:rajeswarivr1790@gmail.com">rajeswarivr1790@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">call me</span>{" "}
        <a href="Tel: +91 9092745806">+91 86106 07764</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
