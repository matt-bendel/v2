import React from 'react'
import {isMobile} from 'react-device-detect'
import Intro from "./Intro";

class Contact extends React.Component {
    getEmail () {
        var email = 'buckeyemail.osu.edu';
        email = 'bendel.8' + '@' + email;
        email = 'mailto: ' + email + '?subject=I saw your website and...';
        return email;
    }

    getContact() {
        if (isMobile) {
            return(
                <div id="contact" style={{visibility: 'hidden', paddingTop: '100px'}}>
                    <div className="content-div-mobile" style={{marginTop: '50px'}}>
                        <p className="page-title" style={{fontSize: '40px', marginBottom: '3%'}}>Reach Out</p>
                        <div>
                            <p style={{color: 'darkgrey', fontSize: '16px'}}>If you have any questions about me, my previous
                                experience, or just want to
                                chat, feel free to reach out. I will get back to you as quickly as I can!
                            </p>
                            <div className={'center'}>
                                <a href={this.getEmail()} target="_blank" style={{textDecoration: 'none', textAlign: 'center', alignSelf: 'center'}}>
                                    <div className="btn">Contact Me</div>
                                </a>
                            </div>
                        </div>
                        <div className="closing-bar" style={{marginTop: '50px'}}></div>
                    </div>
                </div>
            );
        }
        return(
            <div id="contact" style={{visibility: 'hidden', paddingTop: '100px', paddingBottom: '100px'}}>
                <div className="content-div" style={{marginTop: '50px'}}>
                    <div style={{height: '120px', width: '80%', margin: '0', marginLeft: '5px'}}>
                        <p className="page-title" style={{fontSize: '65px'}}>Reach Out</p>
                    </div>
                    <div>
                        <p style={{color: 'darkgrey', fontSize: '18px'}}>If you have any questions about me, my previous
                            experience, or just want to
                            chat, feel free to reach out. I will get back to you as quickly as I can!
                        </p>
                        <div className={'center'}>
                            <a href={this.getEmail()} target="_blank" style={{textDecoration: 'none', textAlign: 'center', alignSelf: 'center'}}>
                                <div className="btn">Contact Me</div>
                            </a>
                        </div>
                    </div>
                    <div className="closing-bar" style={{marginTop: '50px'}}></div>
                </div>
            </div>
        );
    }
    render() {
        return this.getContact();
    }
}

export default Contact;