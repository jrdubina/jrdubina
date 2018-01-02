import React from "react";

export class Portfolio extends React.Component {
    render() {
        return (

        	<section className="p-0" id="portfolio">
			      <div className="container">
			        <div className="row align-items-center">
			          <div className="col-md-6">
			            <div className="p-5">
			              <img className="img-fluid" src="../images/portfolio/paypal_blend.png" alt="" />
			            </div>
			          </div>
			          <div className="col-md-6">
			            <div className="p-5">
			              <h2 className="display-4">PayPal</h2>
			              <p>I worked at PayPal from 2012 to 2014 as an Integration Engineer. In this role I was responsible for managing internal sites, working with developers to install PayPal API's on their websites and help resolve other technical issues on customers shopping carts.</p>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="container">
			        <div className="row align-items-center">
			          <div className="col-md-6">
			            <div className="p-5">
			              <img className="img-fluid" src="../images/portfolio/gowise_blend.png" alt="" />
			            </div>
			          </div>
			          <div className="col-lg-6">
			            <div className="p-5">
			              <h2 className="display-4">GoWISE USA</h2>
			              <p>At GoWISE I was responsible for the redesign and managing of the Shopify site. I worked with many plugins but also had to quickly learn Liquid template language to create custom features for the website.</p>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="container">
			        <div className="row align-items-center">
			          <div className="col-md-6">
			            <div className="p-5">
			              <img className="img-fluid" src="../images/portfolio/socialwhirled_blend.png" alt="" />
			            </div>
			          </div>
			          <div className="col-md-6">
			            <div className="p-5">
			              <h2 className="display-4">Social Whirled</h2>
			              <p>While SocialWhirled is no longer around after closing in 2016, I was the single and only front end developer. I additionally did all the graphic design. My role was to build templates for our software for customers, manage the business website and work on marketing campaigns.</p>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="container">
			        <div className="row align-items-center">
			          <div className="col-md-6">
			            <div className="p-5">
			              <img className="img-fluid" src="../images/portfolio/mingsmark_blend.png" alt="" />
			            </div>
			          </div>
			          <div className="col-md-6">
			            <div className="p-5">
			              <h2 className="display-4">Ming's Mark</h2>
			              <p>The Ming'g Mark website is a Wordpress website that is a wholesale site for approved businesses to make wholesale purchases. I had to build this site from the ground up and use some plugins but also build a lot of custom features.</p>
			            </div>
			          </div>
			        </div>
			      </div>
        	</section>

        );
    }
}