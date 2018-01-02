import React from "react";

export const Header = (props) => {
    return (

        <header className="masthead text-center text-white d-flex">
          <div className="container my-auto">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <h1 className="text-uppercase">
                  <strong>Most people make the mistake of thinking design is what it looks like</strong>
                </h1>
                <hr></hr>
              </div>
              <div className="col-lg-8 mx-auto">
                <a className="btn btn-primary btn-xl js-scroll-trigger" href="#portfolio"><i className="fas fa-arrow-circle-down"></i> See My Work</a>
              </div>
            </div>
          </div>
        </header>

    );
};