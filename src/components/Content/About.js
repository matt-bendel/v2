import React from 'react';
import { isMobile } from 'react-device-detect';
import lulu from './../../images/lulu.png';
import fam from './../../images/fam.png';
import chewie from './../../images/chewie.png';
import josh from './../../images/josh.png';
import dis from './../../images/dis.png';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from './../../css/slider.scss';

class About extends React.Component {
    getAbout () {
        // if (isMobile) {
            return(
                <div id="about-m" style={{margintTop: '40px', display: 'block', visibility: 'hidden'}}>
                    <div className="content-div-mobile" style={{overflow: 'auto'}}>
                        <p className="page-title" style={{fontSize: '40px', marginBottom: '3%'}}>About</p>
                        <div className="row">
                            <div className="col-md-8" style={{color: 'darkgrey', fontSize: '14px'}}>
                                <p>
                                    Originally majoring in
                                    Mathematics, I switched to Electrical and Computer Engineering my second year and
                                    haven't looked back.
                                    ECE has allowed me to gain a deeper understanding of how hardware and software interact
                                    with one another.
                                </p>
                                <p>
                                    Outside of the classroom a variety of experiences, both personal and professional, have
                                    helped
                                    sharpen my skills as a developer, and prepare me to perform at the highest level
                                    possible. You can
                                    see more about my experiences in the Work and Personal experience sections below.
                                </p>
                                <p>
                                    When not studying for school or working, I enjoy spending time with my family, hanging
                                    out with my friends,
                                    working on my personal projects, and playing video games. I love sports, especially
                                    football, and
                                    am a huge Browns fan.
                                </p>
                            </div>
                            <div className="col-md-4" style={{padding: '0', marginTop: '20px', height: '300x'}}>
                                <div id="1-img" className="img-card" style={{height: '300px', position: 'relative', backgroundImage: 'url(' + chewie + ')', backgroundPosition: 'center'}}></div>
                            </div>
                        </div>
                        <div className="closing-bar" style={{marginTop: '50px'}}></div>
                    </div>
                </div>
            );
        // }
        return(
            <div id="about" style={{marginTop: '100px', display: 'block', visibility: 'visible'}}>
                <div className="content-div" style={{marginTop: '50px'}}>
                    <div style={{height: '120px', width: '80%', margin: '0', marginLeft: '5px', marginBottom: '3%'}}>
                        <p className="page-title" style={{fontSize: '65px'}}>About</p>
                    </div>
                    <div className="row" style={{height: '500px'}}>
                        <div className="col-md-4" style={{padding: '0'}}>
                            <div style={{margin: '0', marginTop: '15px', bottom: '0'}}>
                                <AwesomeSlider fillParent={true} cssModule={AwesomeSliderStyles}>
                                    <div data-src={dis}/>
                                    <div data-src={fam}/>
                                    <div data-src={josh}/>
                                    <div data-src={chewie}/>
                                    <div data-src={lulu}/>
                                </AwesomeSlider>
                            </div>
                        </div>
                        <div className="col-md-8" style={{color: 'darkgrey', fontSize: '16px'}}>
                            <div style={{marginLeft: '20px'}}>
                                <p>
                                    Originally majoring in
                                    Mathematics, I switched to Electrical and Computer Engineering my second year and
                                    haven't looked back.
                                    ECE has allowed me to gain a deeper understanding of how hardware and software interact
                                    with one another.
                                </p>
                                <p>
                                    Outside of the classroom a variety of experiences, both personal and professional, have
                                    helped
                                    sharpen my skills as a developer, and prepare me to perform at the highest level
                                    possible. You can
                                    see more about my experiences in the Work and Personal experience sections below.
                                </p>
                                <p>
                                    When not studying for school or working, I enjoy spending time with my family, hanging
                                    out with my friends,
                                    working on my personal projects, and playing video games. I love sports, especially
                                    football, and
                                    am a huge Browns fan. I also have a dog named Lulu who I am hoping will
                                    one day be TikTok famous. You can see her, and some pictures that show some more of who I am on the left.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="closing-bar" style={{marginTop: '50px'}}></div>
                </div>
            </div>
        );
    }

    render() {
        return this.getAbout();
    }
}

export default About;