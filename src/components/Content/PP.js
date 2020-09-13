import React from "react";
import {isMobile} from 'react-device-detect';
import bar from "../../images/bar.png";
import rsma_site from "../../images/rsma_site.png";

class PP extends React.Component {
    getPP () {
        if (isMobile) {
            return(
                <div id="personal-projects" style={{visibility: 'hidden', paddingTop: '50px'}}>
                    <div className="content-div-mobile" style={{marginTop: '50px'}}>
                        <p className="page-title" style={{fontSize: '40px'}}>My Projects</p>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="img-card" style={{height: '300px', position: 'relative', backgroundImage: 'url(' + bar + ')', backgroundPosition: 'center', alignSelf: 'center'}}></div>
                            </div>
                            <div className="col-md-8" style={{color: 'darkgrey', fontFamily: 'Courier New'}}>
                                <h2>Automated Bar</h2>
                                <p style={{fontSize: '16px'}}>This automated bar allows you to place your orders and it will make the drinks for you!
                                    It consists of a web app and API made using Laravel that acts as the user interface.
                                    From there, a python script regularly requests the API for new orders. Once a new order is received,
                                    the Raspberry Pi parses order information from the JSON API response and sends it to an Arduino, which in turn
                                    tells the electronics what to do! All code for this project, including the web app (link <a href='http://smart-bar-app.herokuapp.com/'>here</a>), python scripts, and arduino code, can be found on my <a href='https://github.com/matt-bendel'>github</a>.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="img-card" style={{height: '300px', position: 'relative', backgroundImage: 'url(' + rsma_site + ')', backgroundPosition: 'center', alignSelf: 'center'}}></div>
                            </div>
                            <div className="col-md-8" style={{color: 'darkgrey', fontFamily: 'Courier New'}}>
                                <h2>Company Website</h2>
                                <p style={{fontSize: '16px'}}>
                                    This website was built for a local company, achieving each of their individual needs.
                                    This is an Apache website, made using vanilla PHP. A link to the site can be
                                    found <a href="http://rsmallcservices.com/">here</a>, and the code can be found on my <a href='https://github.com/matt-bendel'>github</a>.
                                </p>
                            </div>
                        </div>
                        <div className="closing-bar" style={{marginTop: '50px'}}></div>
                    </div>
                </div>
            );
        }
        return(
            <div id="personal-projects" style={{visibility: 'hidden', paddingTop: '50px'}}>
                <div className="content-div" style={{marginTop: '50px'}}>
                    <p className="page-title" style={{fontSize: '65px', color: 'white'}}>Personal Projects</p>
                    <div className="row">
                        <div className="col-md-8" style={{color: 'darkgrey', fontFamily: 'Courier New'}}>
                            <h2>Automated Bar</h2>
                            <p style={{fontSize: '16px'}}>This automated bar allows you to place your orders and it will make the drinks for you!
                                It consists of a web app and API made using Laravel that acts as the user interface.
                                From there, a python script regularly requests the API for new orders. Once a new order is received,
                            the Raspberry Pi parses order information from the JSON API response and sends it to an Arduino, which in turn
                            tells the electronics what to do! All code for this project, including the web app (link <a href='http://smart-bar-app.herokuapp.com/'>here</a>), python scripts, and arduino code, can be found on my <a href='https://github.com/matt-bendel'>github</a>.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="img-card" style={{height: '300px', position: 'relative', backgroundImage: 'url(' + bar + ')', backgroundPosition: 'center', alignSelf: 'center'}}></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="img-card" style={{height: '300px', position: 'relative', backgroundImage: 'url(' + rsma_site + ')', backgroundPosition: 'center', alignSelf: 'center'}}></div>
                        </div>
                        <div className="col-md-8" style={{color: 'darkgrey', fontFamily: 'Courier New'}}>
                            <h2>Company Website</h2>
                            <p style={{fontSize: '16px'}}>
                                This website was built for a local company, achieving each of their individual needs.
                                This is an Apache website, made using vanilla PHP. A link to the site can be
                                found <a href="http://rsmallcservices.com/">here</a>, and the code can be found on my <a href='https://github.com/matt-bendel'>github</a>.
                            </p>
                        </div>
                    </div>
                    <div className="closing-bar" style={{marginTop: '50px'}}></div>
                </div>
            </div>
        );
    }

    render() {
        return this.getPP();
    }
}

export default PP;