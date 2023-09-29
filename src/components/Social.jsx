import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-linkedin",
    link: "https://www.linkedin.com/in/shahid-afridi-648045203/",
  },
  { iconName: "fa fa-instagram", link: "https://www.instagram.com/shahid_afridi.js/" },
  {
    iconName: "fa fa-facebook",
    link: "https://www.facebook.com/profile.php?id=100013747351550",
  },
  { iconName: "fa fa-github", link: "https://github.com/Shahid-Afridii" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
