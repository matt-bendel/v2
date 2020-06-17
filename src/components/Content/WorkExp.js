import React from 'react';
import { isMobile } from 'react-device-detect';

class WorkExp extends React.Component {
    getExp() {
        if (isMobile) {
            // TODO: This needs big time work for mobile
            return(
                <div id="work-exp" style={{visibility: 'hidden', paddingTop: '100px'}}>
                    <div className="content-div" style={{marginTop: '50px'}}>
                        <div style={{height: '120px', width: '80%', margin: '0', marginLeft: '5px', marginBottom: '3%'}}>
                            <p className="page-title" style={{fontSize: '65px'}}>Work Experience</p>
                        </div>
                        <div className="row">
                            <div className="col-md-4" style={{paddingRight: '0'}}>
                                <ul className="work-list" style={{color: 'ghostwhite'}}>
                                    <li style={{margin: '0'}}>
                                        <button className="test selected" id="blubrry-label">
                                            Blubrry
                                        </button>
                                    </li>
                                    <li>
                                        <button className="test" id="te-label">
                                            Top Echelon
                                        </button>
                                    </li>
                                    <li>
                                        <button className="test" id="esl-label">
                                            OSU ESL
                                        </button>
                                    </li>
                                    <li>
                                        <button className="test" id="dsl-label">
                                            OSU DSL
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-8" style={{padding: '0', overflow: 'hidden'}}>
                                <div id="blubrry-info" className="work-info">
                                    <div className="work-info-top">
                                        <p style={{color: 'white', display: 'inline-block', margin: '0'}}>
                                            Software Developer Intern -
                                        </p>
                                        <a href="https://blubrry.com/" target="_blank" className="company-link">Blubrry
                                            Podcasting</a>
                                    </div>
                                    <div>
                                        <p style={{color: 'darkgrey', fontFamily: 'Courier New'}}>May 2020 - August 2020</p>
                                    </div>
                                    <ul className="fancy" style={{margin: '0', padding: '0', columnCount: '1', fontSize: '15px'}}>
                                        <li><span>Created a new page to serve private RSS feeds to validated users using basic http authentication</span>
                                        </li>
                                        <li><span>Helped overhaul Blubrry's publisher system with new designs, and implemented a new onboarding process for users</span>
                                        </li>
                                        <li>
                                            <span>Wrote use cases for the Blubrry API in Python, Ruby, PHP, Node.js, and C#</span>
                                        </li>
                                        <li><span>Used PHP, MYSQL, ES6, CSS, and WAMP</span></li>
                                    </ul>
                                </div>
                                <div id="te-info" className="work-info">
                                    <div className="work-info-top">
                                        <p style={{color: 'white', display: 'inline-block', margin: '0'}}>
                                            Software Developer Intern -
                                        </p>
                                        <a href="https://www.topechelon.com/" target="_blank" className="company-link">Top
                                            Echelon Software</a>
                                    </div>
                                    <div>
                                        <p style={{color: 'darkgrey', fontFamily: 'Courier New'}}>May 2019 - August 2019</p>
                                    </div>
                                    <ul className="fancy" style={{margin: '0', padding: '0', columnCount: '1', fontSize: '15px'}}>
                                        <li><span>Worked as a full-stack developer on a variety of problems ranging from bug fixes to implementing new features</span>
                                        </li>
                                        <li><span>Worked closely with the team using Agile to develop and plan a new profile feature for recruiters and agencies in the TE Network</span>
                                        </li>
                                        <li><span>Built endpoints and front-end views for the new version of profiles for recruiters in the TE network</span>
                                        </li>
                                        <li><span>Mostly used Ruby on Rails, PostgreSQL, and AngularJS</span></li>
                                    </ul>
                                </div>
                                <div id="esl-info" className="work-info">
                                    <div className="work-info-top">
                                        <p style={{color: 'white', display: 'inline-block', margin: '0'}}>
                                            Student Researcher -
                                        </p>
                                        <a href="https://electroscience.osu.edu/about" target="_blank"
                                           className="company-link">OSU ElectroScience Lab</a>
                                    </div>
                                    <div>
                                        <p style={{color: 'darkgrey', fontFamily: 'Courier New'}}>Jan 2020 - Present</p>
                                    </div>
                                    <ul className="fancy" style={{margin: '0', padding: '0', columnCount: '1', fontSize: '15px'}}>
                                        <li><span>Working as a student researcher, developing the technology tools we will be using to study EEG signals in young people with concussions</span>
                                        </li>
                                        <li><span>Built an app using the Unity game engine that interfaces with an EEG headset and collects raw data</span>
                                        </li>
                                        <li><span>Built a web server using Python to store the data in a PostgreSQL database via a POST from the Unity app</span>
                                        </li>
                                        <li><span>Used Python, Django, and PostgreSQL</span></li>
                                    </ul>
                                </div>
                                <div id="dsl-info" className="work-info">
                                    <div className="work-info-top">
                                        <p style={{color: 'white', display: 'inline-block', margin: '0'}}>
                                            Student Engineer -
                                        </p>
                                        <a href="http://drivesim.osu.edu/" target="_blank" className="company-link">OSU
                                            Driving Simulation Lab</a>
                                    </div>
                                    <div>
                                        <p style={{color: 'darkgrey', fontFamily: 'Courier New'}}>Jan 2020 - Present</p>
                                    </div>
                                    <ul className="fancy" style={{margin: '0', padding: '0', columnCount: '1', fontSize: '15px'}}>
                                        <li><span>Working as a student software engineer, developing simulation scenarios using SimCreater</span>
                                        </li>
                                        <li><span>Working with clients to develop to their specific technical needs</span>
                                        </li>
                                        <li><span>Primarily using JavaScript</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="closing-bar"></div>
                    </div>
                </div>
            );
        }
        return(
            <div id="work-exp" style={{visibility: 'hidden', paddingTop: '100px'}}>
                <div className="content-div" style={{marginTop: '50px'}}>
                    <div style={{height: '120px', width: '80%', margin: '0', marginLeft: '5px', marginBottom: '3%'}}>
                        <p className="page-title" style={{fontSize: '65px'}}>Work Experience</p>
                    </div>
                    <div className="row">
                        <div className="col-md-4" style={{paddingRight: '0'}}>
                            <ul className="work-list" style={{color: 'ghostwhite'}}>
                                <li style={{margin: '0'}}>
                                    <button className="test selected" id="blubrry-label">
                                        Blubrry
                                    </button>
                                </li>
                                <li>
                                    <button className="test" id="te-label">
                                        Top Echelon
                                    </button>
                                </li>
                                <li>
                                    <button className="test" id="esl-label">
                                        OSU ESL
                                    </button>
                                </li>
                                <li>
                                    <button className="test" id="dsl-label">
                                        OSU DSL
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-8" style={{padding: '0', overflow: 'hidden'}}>
                            <div id="blubrry-info" className="work-info">
                                <div className="work-info-top">
                                    <p style={{color: 'white', display: 'inline-block', margin: '0'}}>
                                        Software Developer Intern -
                                    </p>
                                    <a href="https://blubrry.com/" target="_blank" className="company-link">Blubrry
                                        Podcasting</a>
                                </div>
                                <div>
                                    <p style={{color: 'darkgrey', fontFamily: 'Courier New'}}>May 2020 - August 2020</p>
                                </div>
                                <ul className="fancy" style={{margin: '0', padding: '0', columnCount: '1', fontSize: '15px'}}>
                                    <li><span>Created a new page to serve private RSS feeds to validated users using basic http authentication</span>
                                    </li>
                                    <li><span>Helped overhaul Blubrry's publisher system with new designs, and implemented a new onboarding process for users</span>
                                    </li>
                                    <li>
                                        <span>Wrote use cases for the Blubrry API in Python, Ruby, PHP, Node.js, and C#</span>
                                    </li>
                                    <li><span>Used PHP, MYSQL, ES6, CSS, and WAMP</span></li>
                                </ul>
                            </div>
                            <div id="te-info" className="work-info">
                                <div className="work-info-top">
                                    <p style={{color: 'white', display: 'inline-block', margin: '0'}}>
                                        Software Developer Intern -
                                    </p>
                                    <a href="https://www.topechelon.com/" target="_blank" className="company-link">Top
                                        Echelon Software</a>
                                </div>
                                <div>
                                    <p style={{color: 'darkgrey', fontFamily: 'Courier New'}}>May 2019 - August 2019</p>
                                </div>
                                <ul className="fancy" style={{margin: '0', padding: '0', columnCount: '1', fontSize: '15px'}}>
                                    <li><span>Worked as a full-stack developer on a variety of problems ranging from bug fixes to implementing new features</span>
                                    </li>
                                    <li><span>Worked closely with the team using Agile to develop and plan a new profile feature for recruiters and agencies in the TE Network</span>
                                    </li>
                                    <li><span>Built endpoints and front-end views for the new version of profiles for recruiters in the TE network</span>
                                    </li>
                                    <li><span>Mostly used Ruby on Rails, PostgreSQL, and AngularJS</span></li>
                                </ul>
                            </div>
                            <div id="esl-info" className="work-info">
                                <div className="work-info-top">
                                    <p style={{color: 'white', display: 'inline-block', margin: '0'}}>
                                        Student Researcher -
                                    </p>
                                    <a href="https://electroscience.osu.edu/about" target="_blank"
                                       className="company-link">OSU ElectroScience Lab</a>
                                </div>
                                <div>
                                    <p style={{color: 'darkgrey', fontFamily: 'Courier New'}}>Jan 2020 - Present</p>
                                </div>
                                <ul className="fancy" style={{margin: '0', padding: '0', columnCount: '1', fontSize: '15px'}}>
                                    <li><span>Working as a student researcher, developing the technology tools we will be using to study EEG signals in young people with concussions</span>
                                    </li>
                                    <li><span>Built an app using the Unity game engine that interfaces with an EEG headset and collects raw data</span>
                                    </li>
                                    <li><span>Built a web server using Python to store the data in a PostgreSQL database via a POST from the Unity app</span>
                                    </li>
                                    <li><span>Used Python, Django, and PostgreSQL</span></li>
                                </ul>
                            </div>
                            <div id="dsl-info" className="work-info">
                                <div className="work-info-top">
                                    <p style={{color: 'white', display: 'inline-block', margin: '0'}}>
                                        Student Engineer -
                                    </p>
                                    <a href="http://drivesim.osu.edu/" target="_blank" className="company-link">OSU
                                        Driving Simulation Lab</a>
                                </div>
                                <div>
                                    <p style={{color: 'darkgrey', fontFamily: 'Courier New'}}>Jan 2020 - Present</p>
                                </div>
                                <ul className="fancy" style={{margin: '0', padding: '0', columnCount: '1', fontSize: '15px'}}>
                                    <li><span>Working as a student software engineer, developing simulation scenarios using SimCreater</span>
                                    </li>
                                    <li><span>Working with clients to develop to their specific technical needs</span>
                                    </li>
                                    <li><span>Primarily using JavaScript</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="closing-bar"></div>
                </div>
            </div>
        );
    }

    render() {
        return this.getExp();
    }
}

export default WorkExp;