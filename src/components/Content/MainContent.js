import React from 'react';
import Fade from 'react-reveal/Fade';
import { isMobile } from 'react-device-detect';
import Intro from './Intro';
import About from './About';
import WorkExp from './WorkExp';
import Contact from './Contact';
import PP from './PP'

class MainContent extends React.Component {
    getContent() {
        if (isMobile) {
            return(
                <div className="main-section" style={{margin: '0', width: '100%', display: 'block', textAlign: 'left'}}>
                    <div style={{height: '100px', width: '100%', margin: '0', marginBottom: '25px', overflow: 'auto'}}>
                        <Fade bottom delay={3250}>
                            <p className="page-title" style={{fontSize: '50px'}}>Hello There</p>
                        </Fade>
                    </div>
                    <Fade bottom delay={3750}>
                        <Intro></Intro>
                    </Fade>
                    <div className="spacer"></div>
                    <About></About>
                    <div className="spacer"></div>
                    <Contact></Contact>
                    <div className="spacer"></div>
                </div>
            );
        }
        return(
            <div className="main-section" style={{textAlign: 'left'}}>
                <div style={{height: '120px', width: '80%', margin: '0', marginBottom: '25px', marginLeft: '10%', overflow: 'hidden'}}>
                    <Fade bottom delay={5000}>
                        <p className="page-title">Hello There</p>
                    </Fade>
                </div>
                <Fade bottom delay={5500}>
                    <Intro></Intro>
                </Fade>
                <div className="spacer"></div>
                <About></About>
                <div className="spacer"></div>
                <WorkExp></WorkExp>
                <div className="spacer"></div>
                <PP></PP>
                <div className="spacer"></div>
                <Contact></Contact>
                <div className="spacer"></div>
            </div>
        );
    }

    render() {
        return this.getContent();
    }
}

export default MainContent;