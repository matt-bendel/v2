import React from 'react';
import { isMobile } from 'react-device-detect';
import Bounce from 'react-reveal/Bounce'

class WorkExp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blubrry: true,
            te: false,
            esl: false,
            dsl: false,
            previous: 'blubrry'
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = clickedButton => Event => {
        if (this.state.previous == clickedButton) {
            return;
        }

        switch (this.state.previous) {
            case 'blubrry':
                this.setState({blubrry: false});
                break;

            case 'te':
                this.setState({te: false});
                break;

            case 'esl':
                this.setState({esl: false});
                break;

            case 'dsl':
                this.setState({dsl: false});
                break;
        }

        switch (clickedButton) {
            case 'blubrry':
                setTimeout(() => {
                    this.setState({blubrry: true});
                    this.setState({previous: 'blubrry'});
                }, 400);
                break;

            case 'te':
                setTimeout(() => {
                    this.setState({te: true});
                    this.setState({previous: 'te'});
                }, 400);
                break;

            case 'esl':
                setTimeout(() => {
                    this.setState({esl: true});
                    this.setState({previous: 'esl'});
                }, 400);
                break;

            case 'dsl':
                setTimeout(() => {
                    this.setState({dsl: true});
                    this.setState({previous: 'dsl'});
                }, 400);
                break;
        }
    }

    getExp() {
        // if (isMobile) {
            // TODO: This needs big time work for mobile
            return(
                <div id="work-exp" style={{visibility: 'hidden', paddingTop: '40px'}}>
                    <div className="content-div-mobile" style={{marginTop: '50px'}}>
                        <p className="page-title" style={{fontSize: '40px'}}>Work Experience</p>
                        <div className="row" style={{height: '200px'}}>
                            <div className="col-md-4 center" style={{padding: '0', display: 'inline-block'}}>
                                <ul className="work-list-mobile" style={{color: 'ghostwhite', alignSelf: 'center', textAlign: 'center'}}>
                                    <li style={{margin: '0'}}>
                                        <button style={this.state.blubrry ? {color: 'darkseagreen', borderTopColor: 'darkseagreen'} : {}} id="blubrry-label" onClick={this.handleClick('blubrry')}>
                                            Blubrry
                                        </button>
                                    </li>
                                    <li>
                                        <button style={this.state.te ? {color: 'darkseagreen', borderTopColor: 'darkseagreen'} : {}} id="te-label" onClick={this.handleClick('te')}>
                                            TE Software
                                        </button>
                                    </li>
                                    <li>
                                        <button style={this.state.esl ? {color: 'darkseagreen', borderTopColor: 'darkseagreen'} : {}} id="esl-label" onClick={this.handleClick('esl')}>
                                            ESL
                                        </button>
                                    </li>
                                    <li>
                                        <button style={this.state.dsl ? {color: 'darkseagreen', borderTopColor: 'darkseagreen'} : {}} id="dsl-label" onClick={this.handleClick('dsl')}>
                                            DSL
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-8" style={{overflow: 'hidden'}}>
                                <Bounce left opposite when={this.state.blubrry}>
                                    <div id="blubrry-info" className="work-info" style={{visibility: 'hidden'}}>
                                        <div className="work-info-top" style={{fontSize: '14px'}}>
                                            <p style={{color: 'white', display: 'inline-block', margin: '0'}}>
                                                Software Developer Intern
                                            </p>
                                            <p style={{marginBottom: '5px'}}>
                                                <a href="https://blubrry.com/" target="_blank" className="company-link"> Blubrry
                                                    Podcasting</a>
                                            </p>
                                            <p style={{color: 'darkgrey', fontFamily: 'Courier New', fontSize: '14px'}}>May 2020 - August 2020</p>
                                        </div>
                                        <div style={{display: 'inline-block'}}>
                                            <ul className="fancy" style={{margin: '0', padding: '0', columnCount: '1', fontSize: '12px'}}>
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
                                    </div>
                                </Bounce>
                                <Bounce left opposite when={this.state.te}>
                                    <div id="te-info" className="work-info">
                                        <div className="work-info-top" style={{fontSize: '14px'}}>
                                            <p style={{color: 'white', display: 'inline-block', margin: '0'}}>
                                                Software Developer Intern
                                            </p>
                                            <p style={{marginBottom: '5px'}}>
                                                <a href="https://www.topechelon.com/" target="_blank" className="company-link"> Top
                                                    Echelon Software</a>
                                            </p>
                                            <p style={{color: 'darkgrey', fontFamily: 'Courier New'}}>May 2019 - August 2019</p>
                                        </div>
                                        {/*<ul className="fancy" style={{margin: '0', padding: '0', columnCount: '1', fontSize: '15px'}}>*/}
                                        {/*    <li><span>Worked as a full-stack developer on a variety of problems ranging from bug fixes to implementing new features</span>*/}
                                        {/*    </li>*/}
                                        {/*    <li><span>Worked closely with the team using Agile to develop and plan a new profile feature for recruiters and agencies in the TE Network</span>*/}
                                        {/*    </li>*/}
                                        {/*    <li><span>Built endpoints and front-end views for the new version of profiles for recruiters in the TE network</span>*/}
                                        {/*    </li>*/}
                                        {/*    <li><span>Mostly used Ruby on Rails, PostgreSQL, and AngularJS</span></li>*/}
                                        {/*</ul>*/}
                                    </div>
                                </Bounce>
                                <Bounce left opposite when={this.state.esl}>
                                    <div id="esl-info" className="work-info">
                                        <div className="work-info-top" style={{fontSize: '14px'}}>
                                            <p style={{color: 'white', display: 'inline-block', margin: '0'}}>
                                                Student Researcher
                                            </p>
                                            <p style={{marginBottom: '5px'}}>
                                                <a href="https://electroscience.osu.edu/about" target="_blank"
                                                   className="company-link"> OSU ElectroScience Lab</a>
                                            </p>
                                            <p style={{color: 'darkgrey', fontFamily: 'Courier New'}}>Jan 2020 - Present</p>
                                        </div>
                                        {/*<ul className="fancy" style={{margin: '0', padding: '0', columnCount: '1', fontSize: '15px'}}>*/}
                                        {/*    <li><span>Working as a student researcher, developing the technology tools we will be using to study EEG signals in young people with concussions</span>*/}
                                        {/*    </li>*/}
                                        {/*    <li><span>Built an app using the Unity game engine that interfaces with an EEG headset and collects raw data</span>*/}
                                        {/*    </li>*/}
                                        {/*    <li><span>Built a web server using Python to store the data in a PostgreSQL database via a POST from the Unity app</span>*/}
                                        {/*    </li>*/}
                                        {/*    <li><span>Used Python, Django, and PostgreSQL</span></li>*/}
                                        {/*</ul>*/}
                                    </div>
                                </Bounce>
                                <div style={{overflow: 'hidden', height: '80%'}}>
                                    <Bounce left opposite when={this.state.dsl}>
                                        <div id="dsl-info" className="work-info">
                                            <div className="work-info-top" style={{fontSize: '14px'}}>
                                                <p style={{color: 'white', display: 'inline-block', margin: '0'}}>
                                                    Student Engineer
                                                </p>
                                                <p style={{marginBottom: '5px'}}>
                                                    <a href="http://drivesim.osu.edu/" target="_blank" className="company-link"> OSU
                                                        Driving Simulation Lab</a>
                                                </p>
                                                <p style={{color: 'darkgrey', fontFamily: 'Courier New'}}>Jan 2020 - Present</p>
                                            </div>
                                            {/*<ul className="fancy" style={{margin: '0', padding: '0', columnCount: '1', fontSize: '15px', overflow: 'hidden'}}>*/}
                                            {/*    <li><span>Working as a student software engineer, developing simulation scenarios using SimCreater</span>*/}
                                            {/*    </li>*/}
                                            {/*    <li><span>Working with clients to develop to their specific technical needs</span>*/}
                                            {/*    </li>*/}
                                            {/*    <li><span>Regularly solving problems with equipment unique to the lab</span>*/}
                                            {/*    </li>*/}
                                            {/*    <li><span>Primarily using JavaScript</span></li>*/}
                                            {/*</ul>*/}
                                        </div>
                                    </Bounce>
                                </div>
                            </div>
                        </div>
                        <div className="closing-bar"></div>
                    </div>
                </div>
            );
        // }
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
                                    <button className={this.state.blubrry ? 'work-button-selected' : ''} style={this.state.blubrry ? {color: 'darkseagreen', borderLeftColor: 'darkseagreen'} : {}} id="blubrry-label" onClick={this.handleClick('blubrry')}>
                                        Blubrry
                                    </button>
                                </li>
                                <li>
                                    <button className={this.state.te ? 'work-button-selected' : ''} style={this.state.te ? {color: 'darkseagreen', borderLeftColor: 'darkseagreen'} : {}} id="te-label" onClick={this.handleClick('te')}>
                                        Top Echelon
                                    </button>
                                </li>
                                <li>
                                    <button className={this.state.esl ? 'work-button-selected' : ''} style={this.state.esl ? {color: 'darkseagreen', borderLeftColor: 'darkseagreen'} : {}} id="esl-label" onClick={this.handleClick('esl')}>
                                        OSU ESL
                                    </button>
                                </li>
                                <li>
                                    <button className={this.state.dsl ? 'work-button-selected' : ''} style={this.state.dsl ? {color: 'darkseagreen', borderLeftColor: 'darkseagreen'} : {}} id="dsl-label" onClick={this.handleClick('dsl')}>
                                        OSU DSL
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-8" style={{padding: '0', overflow: 'hidden'}}>
                            <Bounce top opposite when={this.state.blubrry}>
                                <div id="blubrry-info" className="work-info" style={{visibility: 'hidden'}}>
                                    <div className="work-info-top">
                                        <p style={{color: 'white', display: 'inline-block', margin: '0'}}>
                                            Software Developer Intern -
                                        </p>
                                        <a href="https://blubrry.com/" target="_blank" className="company-link"> Blubrry
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
                            </Bounce>
                            <Bounce top opposite when={this.state.te}>
                                <div id="te-info" className="work-info">
                                    <div className="work-info-top">
                                        <p style={{color: 'white', display: 'inline-block', margin: '0'}}>
                                            Software Developer Intern -
                                        </p>
                                        <a href="https://www.topechelon.com/" target="_blank" className="company-link"> Top
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
                            </Bounce>
                            <Bounce top opposite when={this.state.esl}>
                                <div id="esl-info" className="work-info">
                                    <div className="work-info-top">
                                        <p style={{color: 'white', display: 'inline-block', margin: '0'}}>
                                            Student Researcher -
                                        </p>
                                        <a href="https://electroscience.osu.edu/about" target="_blank"
                                           className="company-link"> OSU ElectroScience Lab</a>
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
                            </Bounce>
                            <div style={{overflow: 'hidden', height: '80%'}}>
                                <Bounce top opposite when={this.state.dsl}>
                                    <div id="dsl-info" className="work-info" style={{overflow: 'hidden'}}>
                                        <div className="work-info-top">
                                            <p style={{color: 'white', display: 'inline-block', margin: '0'}}>
                                                Student Engineer -
                                            </p>
                                            <a href="http://drivesim.osu.edu/" target="_blank" className="company-link"> OSU
                                                Driving Simulation Lab</a>
                                        </div>
                                        <div>
                                            <p style={{color: 'darkgrey', fontFamily: 'Courier New'}}>Jan 2020 - Present</p>
                                        </div>
                                        <ul className="fancy" style={{margin: '0', padding: '0', columnCount: '1', fontSize: '15px', overflow: 'hidden'}}>
                                            <li><span>Working as a student software engineer, developing simulation scenarios using SimCreater</span>
                                            </li>
                                            <li><span>Working with clients to develop to their specific technical needs</span>
                                            </li>
                                            <li><span>Regularly solving problems with equipment unique to the lab</span>
                                            </li>
                                            <li><span>Primarily using JavaScript</span></li>
                                        </ul>
                                    </div>
                                </Bounce>
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