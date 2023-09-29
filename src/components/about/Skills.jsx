import React from "react";
import html from "../../assets/html.jpeg"
import css from "../../assets/css.jpeg"
import net from "../../assets/net.png"
import node from "../../assets/node.jpeg"
import git from "../../assets/git.jpeg"
import react from "../../assets/react.jpeg"
import pandas from "../../assets/pandas.jpeg"
import sql from "../../assets/sql4.png"
import js from "../../assets/js.png"
import "./style.css"
const skillsContent = [
  { skillClass: "p65", skillPercent: "65", skillName: "HTML" },
  { skillClass: "p89", skillPercent: "89", skillName: "JAVASCRIPT" },
  { skillClass: "p70", skillPercent: "70", skillName: "CSS" },
  { skillClass: "p75", skillPercent: "75", skillName: "React" },
  { skillClass: "p60", skillPercent: "60", skillName: "Redux" },
  { skillClass: "p90", skillPercent: "90", skillName: "Lecturing" },
  { skillClass: "p50", skillPercent: "50", skillName: "Data Analysing" },
  { skillClass: "p65", skillPercent: "65", skillName: "Machine Learning" },
  // { skillClass: "p45", skillPercent: "45", skillName: "REACT" },
];
const heroContent = [{  skillImage1: net},
  { skillImage1: node},
  { skillImage1: sql},
  { skillImage1: html},
  { skillImage1: css},
  { skillImage1: js},
  { skillImage1: react},
  { skillImage1: git},
  // { skillImage1: css},
]
 
 

const Skills = () => {
  return (
    <>
      {heroContent.map((data, i) => (

        
        // <div className="col-4"></div>
        <div className="col-4 col-md-3 mb-3 mb-sm-5" key={i}>
          <img className="imageWidth" src={data.skillImage1} alt="" style={{width:"50%"}}/>
          {/* <span>{data?.name}</span> */}
          {/* <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6> */}
        </div>
      ))}
    </>
  );
};

export default Skills;
