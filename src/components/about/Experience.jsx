import React from "react";

const experienceContent = [
  {
    year: "   2022 - Present",
    position: "Software Developer",
    compnayName: "Jpencil Pvt Ltd",
    details: `  Jpencil is Product based Web development company comprises a peerless team that is striving hard to provide 
    visually appealing Websites, stunning Mobile apps, state of the UI/UX designs. Moreover, we are upholding a high standard of excellence
     in building amazing and legitimate E-commerce websites in India, crafting Best-in-class Graphic designs for logos, Business cards, Brochures, Banners. `,
  },
  {
    year: "2013 - 2014",
    position: "Software Developer",
    compnayName: "Linlax Infotech PVT LTD",
    details: `Linlax, a leading multi-process IT Outsourcing Company with specialization in end-to-end e-Commerce Services.Linlax Info Tech provides a wide range of data management and list management services like data processing, data conversion, data entry, ePub, XML, type setting, data mining, data research, data harvesting, Epub, XML, LPO, image scanning, OCR and indexing, forms processing and various other outsourcing services as per the requirement of theclient`,
  },
  {
    year: "2011 - 2013",
    position: "Software Developer",
    compnayName: "Geniuine Infotech ",
    details: `Genuine Infotech Private Limited - GIFT is an emerging ITES [ Information Technology Enabled Service ] Company in South India since 1995, which has technology and process oriented approach as the foundation of all our service offerings. Some of our key domain industries includes financial services, ecommerce, portals, Schools, Flour Mills, traders and complete Web technology works.
    GIFT Software Solution’s strength lies in perceiving the client’s business processes, culture, vision and goals across the industry segments and offering client oriented solutions which are highly reliable.`,
  },
  // {
  //   year: "2005 - 2013",
  //   position: "Consultant",
  //   compnayName: "Videohive",
  //   details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
  //       elit, sed do eiusmod tempor duntt`,
  // },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font" style={{textAlign: 'justify'}}>{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
