import React from "react";
import {isMobile} from 'react-device-detect';

class PP extends React.Component {
    getPP () {
        if (isMobile) {
            return(
                <div id="personal-projects" style={{visibility: 'hidden', paddingTop: '50px'}}>
                    <div className="content-div-mobile" style={{marginTop: '50px'}}>
                        <p className="page-title" style={{fontSize: '40px'}}>Personal Projects</p>
                        <div className="closing-bar" style={{marginTop: '50px'}}></div>
                    </div>
                </div>
            );
        }
        return(
            <div id="personal-projects" style={{visibility: 'hidden', paddingTop: '50px'}}>
                <div className="content-div" style={{marginTop: '50px'}}>
                    <p className="page-title" style={{fontSize: '65px'}}>Personal Projects</p>
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