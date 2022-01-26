import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatAlan.css';

const WhatAlan = () => {
    return (
        <div className="feat__whatalan section__margin" id="aboutMe">
            <div className="feat__whatalan-feature">
                <Feature title="About Me" text="I'm in my last year of undergrad, so I'm mostly working on my Capstone II project. I'm experienced in several programming languages and am mastering them through internships, coursework, and side projects. " />
            </div>

            <div className="feat__whatalan-heading">
                <h1 className="gradient__text" id="projects">PROJECTS -- Here are a few I have worked on:</h1>
                <p>
                    <a href="https://github.com/alantorres4" target="__blank"> Explore more of my projects &nbsp; <i class="fa fa-long-arrow-right"></i> </a>
                </p>
            </div>

            <div className="feat__whatalan-container">
                <Feature title="Toogle: Information Retrieval Project" text="This PHP site runs on an Apache server and uses a Python script in order to search through an inverted file. Output is table of top ten linked files with matched terms." link="http://www.csce.uark.edu/~ajtorres/information_retrieval_project_python/toogle.php"/>
                <Feature title="Database Management Systems Final Project" text="This project uses PHP files in cooperation with running commands on a server using Python3. These command start the backend logic to see what MySQL queries need to used. Those query results are then output on the website and organized using Tabulate." link="http://www.csce.uark.edu/~ajtorres/project_python/index.html"/>
                <Feature title="MAGIC App Capstone II Project" text="The main objective is to build a mobile application with a toolkit that will assist the elderly in locating appropriate, safe, and reliable transportation services in the area, as well as scheduling a ride if a personal driver is available. To build this easy–to–use mobile application, we will be using HTML, CSSS, React Native, Python/Django, and PostgreSQL for most of this project’s needs." link="https://capstone-csce.uark.edu/fall-spring-21-22/teams-1-7-sp22/team-6-magic-toolkit-and-application/"/>
            </div>

        </div>
    )
}

export default WhatAlan
