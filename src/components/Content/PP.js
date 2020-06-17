import React from "react";
import {isMobile} from 'react-device-detect';

class PP extends React.Component {
    getPP () {
        if (isMobile) {
            return;
        }
        return(
            <div id="personal-projects" style={{visibility: 'hidden', paddingTop: '100px'}}>
                <div className="content-div" style={{marginTop: '50px'}}>
                    <div style={{height: '120px', width: '80%', margin: '0', marginLeft: '5px'}}>
                        <p className="page-title" style={{fontSize: '65px'}}>Personal Projects</p>
                    </div>
                    <div className="row">
                        <div className="col-md-8" style={{color: 'darkgrey', fontSize: '14px'}}>
                        </div>
                        <div className="col-md-4" style={{padding: '0'}}>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4" style={{padding: '0'}}>
                        </div>
                        <div className="col-md-8" style={{color: 'darkgrey', fontSize: '14px'}}>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8" style={{color: 'darkgrey', fontSize: '14px'}}>
                        </div>
                        <div className="col-md-4" style={{padding: '0'}}>
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