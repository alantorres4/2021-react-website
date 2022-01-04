import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';
import resume from '../../assets/resume.pdf';

const featuresData = [
    {
        title: 'Software Engineer Intern',
        text: 'CERNER CORPORATION.... During the Summer of 2021, I designed and implemented a database using Ruby to keep track of errors from AWS and its relation to a Jira ticket. I also redesigned an automatic Jira logger to include MySQL database checking/updating/inserting using the Jira REST API.'
    },
    {
        title: 'Web Developer Intern',
        text: 'ALEXIS INFORMATION SYSTEMS.... Throughout the Spring semester of 2021, I performed front-end web development for multiple websites, mainly working with analytical software from Google, Trello, and more to see how the websites could be improved.'
    },
    {
        title: 'C++ Teaching Assistant',
        text: 'UNIVERSITY OF ARKANSAS.... Taught two labs for a Programming Foundations I course, as well as another lab for the Programming Foundations II course. I was required to hold office hours (through Zoom), grade homework assignments, as well as create a few homework assignments using O.O.P. in C++.'
    },
    {
        title: 'Student Success Center Intern',
        text: 'UNIVERSITY OF ARKANSAS.... Provided support for the Fulbright College students through outreach, advocacy, and promotion of college resources with the overall goal of improving students’ achievements and sense of belonging.'
    }
]

const Features = () => {
    return (
        <div className="feats__features section__padding" id="experience">
            <div className="feats__features-heading">
                <h1 className="gradient__text">Alongside coursework and personal projects, internships and teaching assistant positions have shaped who I am as a programmer and teacher.</h1>
                <p>
                    <a href={resume} download>Download my resume</a>
                </p>
            </div>
            <div className="feats__features-container">
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>

        </div>
    )
}

export default Features
