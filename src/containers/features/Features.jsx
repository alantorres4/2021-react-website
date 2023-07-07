import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';
import resume from '../../assets/resume.pdf';

import upscaledAlan from '../../assets/3d-work-exp-upscaled.jpeg';


const featuresData = [
    {
        aboveTitle: 'Oracle Cerner',
        title: 'Software Developer',
        text: 'Collaborated with cross-functional teams, developing and testing new health software, implementing frontend, backend, and database changes to enhance user experience. I actively participated in Agile ceremonies, ensuring adherence to best practices through code reviews, while quickly gaining proficiency in assigned tech stacks and CI/CD processes.',
        link: 'https://www.cerner.com/'
    }
    ,
    {
        aboveTitle: 'Cerner Corporation',
        title: 'Software Engineer Intern',
        text: 'During the Summer of 2021, I designed and implemented a database table using Ruby on Rails Active Record to keep track of errors from AWS and its relation to a Jira ticket using the Jira REST API. I also redesigned the team\'s existing automatic Jira logger to include fetching and updating the table.',
        link: 'https://www.cerner.com/'
    },
    {
        aboveTitle: 'Alexis Information Systems',
        title: 'Web Developer Intern',
        text: 'Throughout the Spring semester of 2021, I performed front-end web development for multiple websites, mainly working with analytical software from Google, Trello, and more to see how the websites could be improved.',
        link: 'https://www.alexisystems.com/'
    },
    {
        aboveTitle: 'University of Arkansas',
        title: 'C++ Teaching Assistant',
        text: 'Taught two labs for a Programming Foundations I course, as well as another lab for the Programming Foundations II course. I was required to hold office hours (through Zoom), grade homework assignments, as well as create a few homework assignments using O.O.P. in C++.',
        link: 'https://computer-science-and-computer-engineering.uark.edu/'
    },
    {
        aboveTitle: 'University of Arkansas',
        title: 'Student Success Center Intern',
        text: 'Provided support for the Fulbright College students through outreach, advocacy, and promotion of college resources with the overall goal of improving students’ achievements and sense of belonging.',
        link: 'https://success.uark.edu/about-us/employment.php'
    }
]

const Features = () => {
    return (
        <div className="feats__features section__padding" id="experience">
            <div className="feats__features-heading">
                <div className="social-links gradient__text">
                    <a href="https://www.linkedin.com/in/alan-torres-054519178/" target="__blank" className="social-buttons"> <i class="fa fa-linkedin"></i> </a>
                    <a href="https://github.com/alantorres4" target="__blank" className="social-buttons"> <i class="fa fa-github"></i> </a>
                </div>

                <h1>Work Experience</h1>
                <p> <a href={resume} download="AlanTorresWebsiteResume.pdf">Download Resume &nbsp; <i class="fa fa-download"> </i></a> </p>

                <div className="work-experience-image">
                    <img src={upscaledAlan} alt="alan working"/>
                </div>

            </div>
            <div className="feats__features-container">
                {featuresData.map((item, index) => (
                    <Feature aboveTitle={item.aboveTitle} title={item.title} text={item.text} link={item.link} key={item.title + index} />
                    ))}
            </div>
        </div>
    )
}

export default Features
