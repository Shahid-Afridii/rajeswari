import React from "react";

const ModalTwoContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>Dar jewellery</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Product </span>:{" "}
              <span className="ft-wt-600 uppercase">Ecommerce</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Client</span>:{" "}
              <span className="ft-wt-600 uppercase">Rishab Aryan </span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Languages & Framework </span>:{" "}
              <span className="ft-wt-600 uppercase">HTML, CSS, Javascript,React js & Node js</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Preview </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="http://darjewellery.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.darjewellery.com
                </a>
              </span>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <div className="videocontainer">
        <img src="img/projects/dar.png" alt="Portolio" />
        </div>
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalTwoContent;
