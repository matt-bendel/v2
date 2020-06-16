import React from 'react';
import { isMobile } from 'react-device-detect';

class About extends React.Component {
    getAbout () {
        if (isMobile) {
            return(<div></div>);
        }
        return(
            <div id="about" style={{visibility: 'hidden', paddingTop: '100px'}}>
                <div className="content-div" style={{marginTop: '50px'}}>
                    <div style={{height: '120px', width: '80%', margin: '0', marginLeft: '5px', marginBottom: '3%'}}>
                        <p className="page-title" style={{fontSize: '65px'}}>About</p>
                    </div>
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
                                am a huge Browns fan. I also have a dog named Lulu who I am hoping will
                                one day be TikTok famous. You can see her, and some pictures that show some more about
                                me, on the right.
                            </p>
                        </div>
                        <div className="col-md-4" style={{padding: '0', overflow: 'hidden'}}>
                            <div style={{height: '300px', margin: '0', marginTop: '15px', overflow: 'hidden'}}>
                                {/*TODO: Add Images*/}
                                <div id="1-img" className="img-card selected" style={{height: '300px', backgroundImage: 'none'}}></div>
                                <div id="2-img" className="img-card" style={{height: '300px', backgroundImage: 'none'}}></div>
                                <div id="3-img" className="img-card" style={{height: '300px', backgroundImage: 'none'}}></div>
                                <div id="4-img" className="img-card" style={{height: '300px', backgroundImage: 'none'}}></div>
                                <div id="5-img" className="img-card" style={{height: '300px', backgroundImage: 'none'}}></div>

                                <div className="prev">&#10094;</div>
                                <div className="next">&#10095;</div>
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