import React from "react";

const educationContent = [
  {
    year: "2007-2011",
    degree: "B.E. COMPUTER SCIENCE AND ENGINEERING" ,
    institute: "ANNA UNIVERSITY",
    details: `Coimbatore Institute of Enginnering & Technology`,
  },
  {
    year: "2019-2020",
    degree: "COURSE IN NODE JS",
    institute: "Udemy",
    details: `Online Learning`,
  },
 
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font" style={{textAlign: 'justify'}}>{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
