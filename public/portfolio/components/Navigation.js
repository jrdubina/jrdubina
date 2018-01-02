import React from "react";

export const Navigation = (props) => {
    return (
        <nav className="navbar navbar-expand-md navbar-light fixed-top" id="mainNav">
			<div className="container">
				<a className="navbar-brand js-scroll-trigger logo-size" href="#page-top"><img src="../images/portfolio/JD.svg" /> Design & Dev</a>
				<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
				  <span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarResponsive">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<a className="nav-link js-scroll-trigger" href="#about">About</a>
						</li>
						<li className="nav-item">
						 	<a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
						</li>
						<li className="nav-item">
						 	<a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
						</li>
						<li className="nav-item">
						 	<a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>

    );
};