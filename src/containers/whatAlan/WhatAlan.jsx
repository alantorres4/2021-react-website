import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatAlan.css';

const WhatAlan = () => {
    return (
        <div className="feat__whatalan section__margin" id="aboutMe">
            <div className="feat__whatalan-feature">
                <Feature title="About Me" text="I'm in my last year of undergrad, so I'm mostly working on my final project (Capstone Project). I'm experienced in several programming languages and am mastering them through internships, coursework, and side projects. " />
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
                <Feature title="Minority Program Matching" text="This GUI program takes in user input such as ethnicity, gender, undergrad year, and more to find the best programs they should apply for." link="https://github.com/Futureforce-Hackathon/Questionnaire"/>
            </div>

        </div>
    )
}

export default WhatAlan
