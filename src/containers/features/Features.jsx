import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';
import resume from '../../assets/resume.pdf';

const featuresData = [
    {
        aboveTitle: 'Oracle Cerner',
        title: 'Software Engineer',
        text: 'Writing and configuring code for new and upgraded solutions in accordance with tech specs. This role requires implementing new code, testing, and debugging the new software, as well as participating in code reviews.',
        link: 'https://www.cerner.com/'
    }
    ,
    {
        aboveTitle: 'Cerner Corporation',
        title: 'Software Engineer Intern',
        text: 'During the Summer of 2021, I designed and implemented a database using Ruby to keep track of errors from AWS and its relation to a Jira ticket. I also redesigned an automatic Jira logger to include MySQL database checking/updating/inserting using the Jira REST API.',
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
        text: 'Provided support for the Fulbright College students through outreach, advocacy, and promotion of college resources with the overall goal of improving students??? achievements and sense of belonging.',
        link: 'https://success.uark.edu/about-us/employment.php'
    }
]

const Features = () => {
    return (
        <div className="feats__features section__padding" id="experience">
            <div className="feats__features-heading">
                <h1 className="gradient__text">Work Experiences</h1>
                <p>
                    <a href={resume} download> <i class="fa fa-file"></i> &nbsp; Download my resume &nbsp; <i class="fa fa-long-arrow-right"> </i></a>
                </p>
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
