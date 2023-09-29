import React, { useState } from "react";
import Modal from "react-modal";
import Index from "../about/index";

const heroContent = {
  heroImage: "img/hero/profile.png",
  heroMobileImage: "img-mobile-light",
  heroTitleName: "Rajeswari Ramasamy",
  heroDesignation: "Software developer",
  heroDescriptions: `I'm Full Stack Developer having around 3 years of experience in Windows and Web application development,
   eager to learn new technologies, seeking a responsible and challenging position with an organization which offers opportunities for personal and professional development 
   where I can best utilize my knowledge and skills.`,
  heroBtn: "more about me",
};

const HeroLight = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
      
        <div className="col-12 col-lg-6 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <img
              src={`img/hero/profile.png`}
              className="img-fluid main-img-mobile p-3 d-sm-block d-lg-none"
              alt="hero man"
            />
            <h1 className="text-uppercase poppins-font "  style={{whiteSpace: 'nowrap',fontSize:"30px"}}>
              I'm {heroContent.heroTitleName}.
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font" style={{textAlign:"justify"}}>{heroContent.heroDescriptions}</p>
            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark light"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about green">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default HeroLight;
