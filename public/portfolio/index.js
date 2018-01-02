import React from "react";
import {render} from "react-dom";

import {Header} from "./components/Header";
import {Navigation} from "./components/Navigation";
import {About} from "./components/About";
import {Portfolio} from "./components/Portfolio";
import {Skills} from "./components/Skills";
import {Contact} from "./components/Contact";
import {Footer} from "./components/Footer";

class App extends React.Component {
    render() {
        return (
            <div className="components">
                <Navigation />
                <Header/>
                <About />
                <Portfolio />
                <Skills />
                <Contact />
                <Footer />
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("jdportfolio"));