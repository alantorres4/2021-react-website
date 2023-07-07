import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatAlan.css';
import ToogleProject from '../../assets/toogle-project-mockup.png';
import DBMSProject from '../../assets/dbms-project-mockup.png';
import MAGICApp from '../../assets/magic-app.png';

const WhatAlan = () => {
    return (
        <div className="feat__whatalan section__margin" id="aboutMe">

            <div className="feat__whatalan-heading">
                <h1 id="projects">Sample of Projects</h1>
                <p>
                    <a href="https://github.com/alantorres4" target="__blank"> Explore more of my projects &nbsp; <i class="fa fa-long-arrow-right"></i> </a>
                </p>
            </div>

            <div className="feat__whatalan-container">
                <Feature aboveTitle="App | React Native, Django, PostgreSQL" title="MAGIC App Senior Capstone II Project" text="The main objective is to build a mobile application with a toolkit that will assist the elderly in locating appropriate, safe, and reliable transportation services in the area, as well as scheduling a ride if a personal driver is available. To build this easy–to–use mobile application, we will be using HTML, CSS, React Native w/ Expo, Python/Django, and PostgreSQL for most of this project’s needs." link="https://capstone-csce.uark.edu/fall-spring-21-22/teams-1-7-sp22/team-6-magic-toolkit-and-application/" imgSrc={MAGICApp}/>
                <Feature aboveTitle="Website | PHP, Python, HTML, CSS" title="Toogle: Information Retrieval Project" text="This PHP site runs on an Apache server and uses a Python script in order to search through an inverted file. Output is table of top ten linked files with matched terms. Toogle is a tiny search engine specifically for the files given by the user. For a standard library of 300 files (each file being hundreds of pages), the program first needs to go through and tokenize the text in such files and build a fixed-length inverted file. This file will then be used in our search engine, as it will use these pre-made files to search through and find matches to queries." link="https://github.com/alantorres4/toogle" imgSrc={ToogleProject} />
                <Feature aboveTitle="Website | PHP, Python, MySQL, HTML, CSS" title="DBMS Final Project" text="This project uses PHP files in cooperation with running commands on a server using Python3. These command start the backend logic to see what MySQL queries need to used. Those query results are then output on the website and organized using Tabulate. The goal of this project is to practice creating a database backend with a web front end using any technologies we preferred. The project is currently hosted on an Apache server that the University of Arkansas Computer Science and Computer Engineering Department host." link="https://github.com/alantorres4/Database-FinalProject" imgSrc={DBMSProject}/>
            </div>

        </div>
    )
}

export default WhatAlan

