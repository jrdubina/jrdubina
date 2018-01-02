import React from "react";

export class About extends React.Component {
    render() {
        return (

          <section id="about">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading text-uppercase">ABOUT MYSELF</h2>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-4 text-center">
                  <div className="service-box mt-5 mx-auto">
                    <i className="fas fa-4x fa-lightbulb text-prim mb-3"></i>
                    <h3 className="mb-3 text-uppercase">Ideas</h3>
                    <p className="mb-0">When it comes to brainstorming and problem solving, I tend to think outside the box. I enjoy innovating and pushing the boundaries. Innovate or die is in my blood. </p>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div className="service-box mt-5 mx-auto">
                    <i className="fas fa-4x fa-edit text-prim mb-3"></i>
                    <h3 className="mb-3 text-uppercase">Design</h3>
                    <p className="mb-0">It helps that I am skilled in Adobe Creative Suite. I am able to design mockups quicker this way and bring forward exactly what the client is looking for. </p>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div className="service-box mt-5 mx-auto">
                    <i className="fas fa-4x fa-file-code text-prim mb-3"></i>
                    <h3 className="mb-3 text-uppercase">Code</h3>
                    <p className="mb-0">Finally, bringing to PSD designs to life. I love pushing the designs to life and ensuring they are multi-platform compatible and error free. Attention to detail.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 text-center">
                  <div className="service-box mt-5 mx-auto">
                    <i className="fas fa-4x fa-shopping-cart text-prim mb-3"></i>
                    <h3 className="mb-3 text-uppercase">E-commerce</h3>
                    <p className="mb-0">I have worked in many E-commerce platforms such as Shopify, Magento, Woocommerce and more.</p>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div className="service-box mt-5 mx-auto">
                    <i className="fas fa-4x fa-address-card text-prim mb-3"></i>
                    <h3 className="mb-3 text-uppercase">CRM</h3>
                    <p className="mb-0">Additionally, I have built and customized CRM's for companies. I have used Salesforce, Suite CRM and Sugar CRM.</p>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div className="service-box mt-5 mx-auto">
                    <i className="fas fa-4x fa-book text-prim mb-3"></i>
                    <h3 className="mb-3 text-uppercase">Knowledge</h3>
                    <p className="mb-0">I'm not intimmidated by new technology but in fact I enjoy learning and progrssing with the changes. I enjoy working through bugs and issues.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        );
    }
}