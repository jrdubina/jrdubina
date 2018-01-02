import React from "react";

export const Footer = (props) => {
    return (

        <div id="footer">

        <footer>
	      <div className="container">
	        <div className="row">
	          <div className="col-md-6">
	            <ul className="list-inline social-buttons">
	              <li className="list-inline-item">
	                <a href="https://stackoverflow.com/users/1770482/jared" target="_blank" title="Jared Dubina's Stack Overflow">
	                  <i className="fab fa-stack-overflow"></i>
	                </a>
	              </li>
	              <li className="list-inline-item">
	                <a href="https://github.com/jrdubina" target="_blank" title="Jared Dubina's GitHub">
	                  <i className="fab fa-github"></i>
	                </a>
	              </li>
	              <li className="list-inline-item">
	                <a href="https://www.linkedin.com/in/jareddubina/" target="_blank" title="Jared Dubina's Linkedin">
	                  <i className="fa fa-linkedin"></i>
	                </a>
	              </li>
	              <li className="list-inline-item">
	                <a href="#" title="Do or do not. There is no try.">
	                  <i className="fab fa-rebel"></i>
	                </a>
	              </li>
	            </ul>
	          </div>
	          <div className="col-md-6">
	            <span className="copyright">Copyright &copy; Jared Dubina 2018</span>
	          </div>
	        </div>
	      </div>
	    </footer>
            
        </div>

    );
}