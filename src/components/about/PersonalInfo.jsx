import React from "react";

const personalInfoContent = [
  { meta: " name", metaInfo: "Rajeswari Ramasamy" },
  // { meta: "last name", metaInfo: "Afridi" },
  // { meta: "Age", metaInfo: "24 Years" },
  { meta: "Nationality", metaInfo: "Indian" },
  { meta: "Freelance", metaInfo: "Available" },
  // { meta: "Address", metaInfo: "Shahid Afridi" },
  { meta: "phone", metaInfo: "+91 86106 07764" },
  { meta: "Email", metaInfo: "Rajeswarivr1790@gmail.com" },
  // { meta: "Skype", metaInfo: " steve.milner" },
  { meta: "languages", metaInfo: "English & Tamil" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
