import React from 'react';
import { isMobile } from 'react-device-detect';
import LeftSide from "./LeftSide";

class RightSide extends React.Component {
    getRight() {
        if (isMobile) {
            return;
        }
        return(
            <div className="right-end" aria-orientation="vertical">
                <div style={{width: '100%', height: '100px'}}>
                    <div className="vline-right" style={{marginBottom: '20px'}}></div>
                </div>
                <div style={{height: '287.5px'}}></div>
                <div style={{width: '100%', height: '100px'}}>
                    <div className="vline-right" style={{marginTop: '20px'}}></div>
                </div>
            </div>
        );
    }

    render() {
        return this.getRight();
    }
}

export default RightSide;