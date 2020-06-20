import React from 'react';
import { isMobile } from 'react-device-detect';
import matt from './../../images/matt.png';

class Intro extends React.Component {
    getEmail () {
        var email = 'buckeyemail.osu.edu';
        email = 'bendel.8' + '@' + email;
        email = 'mailto: ' + email + '?subject=I saw your website and...';
        return email;
    }

    getIntro() {
        if (isMobile) {
            return(
                <div className="content-div-mobile">
                    <p style={{fontFamily: 'Courier New', fontSize: '16px', color: 'darkseagreen', fontWeight: 'normal', margin: '0', marginLeft: '5px'}}>My
                        name is</p>
                    <p className="page-title" style={{fontSize: '40px', animation: 'none', marginBottom: '3%'}}>Matt Bendel</p>
                    <div className="row">
                        <div className="col-md-4" style={{marginBottom: '30px'}}>
                            <div className="center">
                                <div className="img-card" style={{height: '300px', position: 'relative', visibility: 'visible', backgroundImage: 'url(' + matt + ')', backgroundPosition: 'center', alignSelf: 'center'}}></div>
                                <a href={this.getEmail()} target="_blank" style={{textDecoration: 'none'}}>
                                    <div className="btn">Reach Out</div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-8" style={{color: 'darkgrey', fontSize: '14px'}}>
                            <div>
                                <p>
                                    Hi! I'm a fourth year student at The Ohio State University in Columbus, OH graduating in
                                    May 2021.
                                </p>
                                <p>
                                    I'm studying to get my B.S. in Electrical and Computer Engineering with a minor in
                                    Mathematics.
                                    My goal upon graduation is to get a job focused on web app development. I have amassed a
                                    diverse
                                    portfolio of experiences that have helped further develop my critical thinking skills
                                    and hone my
                                    ability to develop high quality software.
                                </p>
                                <p>
                                    Here are some of the languages and tools I am proficient in:
                                </p>
                            </div>
                            <div className="center">
                                <ul className="fancy" style={{fontSize: '16px', marginRight: '8px'}}>
                                    <li style={{marginBottom: '10px'}}><span>Python</span></li>
                                    <li style={{marginBottom: '10px'}}><span>PHP</span></li>
                                    <li><span>Ruby</span></li>
                                    <li style={{marginBottom: '10px'}}><span>HTML</span></li>
                                    <li style={{marginBottom: '10px'}}><span>C#</span></li>
                                    <li><span>Unity</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="closing-bar"></div>
                </div>
            );
        }
        return(
            <div className="content-div">
                <p style={{fontFamily: 'Courier New', fontSize: '20px', color: 'darkseagreen', fontWeight: 'normal', margin: '0', marginLeft: '5px'}}>My
                    name is</p>
                <p className="page-title" style={{fontSize: '65px', animation: 'none', marginBottom: '3%'}}>Matt Bendel</p>
                <div className="row">
                    <div className="col-md-4">
                        {/*TODO: Add Images*/}
                        <div className="center">
                            <div className="img-card" style={{height: '300px', position: 'relative', visibility: 'visible', backgroundImage: 'url(' + matt + ')', alignSelf: 'center'}}></div>
                            <a href={this.getEmail()} target="_blank" style={{textDecoration: 'none'}}>
                                <div className="btn">Reach Out</div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-8" style={{color: 'darkgrey'}}>
                        <div>
                            <p>
                                Hi! I'm a fourth year student at The Ohio State University in Columbus, OH graduating in
                                May 2021.
                            </p>
                            <p>
                                I'm studying to get my B.S. in Electrical and Computer Engineering with a minor in
                                Mathematics.
                                My goal upon graduation is to get a job focused on web app development. I have amassed a
                                diverse
                                portfolio of experiences that have helped further develop my critical thinking skills
                                and hone my
                                ability to develop high quality software.
                            </p>
                            <p>
                                Here are some of the languages and tools I am proficient in:
                            </p>
                        </div>
                        <ul className="fancy" style={{fontSize: '18px'}}>
                            <li><span>Python</span></li>
                            <li><span>PHP</span></li>
                            <li><span>Ruby</span></li>
                            <li><span>HTML and CSS</span></li>
                            <li><span>C#</span></li>
                            <li><span>Unity</span></li>
                        </ul>
                    </div>
                </div>
                <div className="closing-bar"></div>
            </div>
        );
    }

    render() {
        return this.getIntro();
    }
}

export default Intro;