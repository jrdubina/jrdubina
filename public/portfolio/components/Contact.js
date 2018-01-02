import React from "react";

export class Contact extends React.Component {
    render() {
        return (
    	    <section id="contact">
		      <div className="container">
		        <div className="row">
		          <div className="col-lg-12 text-center">
		            <h2 className="section-heading text-uppercase">CONTACT ME</h2>
		          </div>
		        </div>
		        <div className="row">
		          <div className="col-lg-12">
		            <form id="contactForm" action="form-to-email.php" method="post" acceptCharset='UTF-8'>
		              <div className="row">
		                <div className="col-md-6">
		                  <div className="form-group">
		                    <input className="form-control" name="name" id="name" type="text" placeholder="Your Name *" required data-validation-required-message="Please enter your name." />
		                    <p className="help-block text-danger"></p>
		                  </div>
		                  <div className="form-group">
		                    <input className="form-control" name="email" id="email" type="email" placeholder="Your Email *" required data-validation-required-message="Please enter your email address." />
		                    <p className="help-block text-danger"></p>
		                  </div>
		                  <div className="form-group">
		                    <input className="form-control" name="phone" id="phone" type="tel" placeholder="Your Phone *" required data-validation-required-message="Please enter your phone number." />
		                    <p className="help-block text-danger"></p>
		                  </div>
		                  <div className="form-group">
		                    <input className="form-control" name="company" id="company" type="text" placeholder="Your Company or Org"  />
		                    <p className="help-block text-danger"></p>
		                  </div>
		                  <div className="form-group">
		                    <select className="form-control" name="project" id="project" required>
		                    	<option value="" defaultValue>What are you looking for? *</option>
		                    	<option value="Website Design & Developed">Website Designed & Developed</option>
		                    	<option value="Website Developed">Website Developed</option>
		                    	<option value="Website Designed">Website Designed</option>
		                    	<option value="Website Redesign">Website Redesign</option>
		                    	<option value="Ecommerce">Ecommerce Site</option>
		                    	<option value="CMS">Content Management System</option>
		                    	<option value="CRM">Customer Relationship Management</option>
		                    	<option value="Other">Other</option>
		                    </select>
		                    <p className="help-block text-danger"></p>
		                  </div>
		                </div>
		                <div className="col-md-6">
		                  <div className="form-group">
		                    <input className="form-control" name="budget" id="budget" type="text" placeholder="Your Budget"  />
		                    <p className="help-block text-danger"></p>
		                  </div>
		                  <div className="form-group">
		                    <input className="form-control" name="deadline" id="deadline" type="text" placeholder="Your Deadline"  />
		                    <p className="help-block text-danger"></p>
		                  </div>
		                  <div className="form-group">
		                    <textarea className="form-control" name="message" id="message" placeholder="Your Message *" required data-validation-required-message="Please enter a message."></textarea>
		                    <p className="help-block text-danger"></p>
		                  </div>
		                </div>
		                <div className="clearfix"></div>
		                <div className="col-lg-12 text-center">
		                  <div id="success"></div>
		                  <button id="submit" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message <i className="fas fa-sign-in-alt"></i></button>
		                </div>
		              </div>
		            </form>
		          </div>
		        </div>
		      </div>
		    </section>
        );
    }
}