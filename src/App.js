import React from 'react';
import TopNav from './components/TopNav/TopNav';
import LeftSide from './components/Sides/LeftSide'
import MainContent from './components/Content/MainContent'
import RightSide from './components/Sides/RightSide';
import { isMobile } from 'react-device-detect';
import MobileFooter from './components/MobileFooter'
import './App.scss';
import './css/styles.css';
import Reveal from "react-reveal/Reveal";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {loading: true};
    }

    async componentDidMount() {
        setTimeout(() => {
            this.setState({loading: false,});
        }, 5100)
    }

    render() {
        if (this.state.loading) {
            return(
                <div className="App">
                    <Reveal effect="shrink" delay={4500}>
                        <div className="preload">
                            <div id="logoPreLoad" className="square" style={{textAlign: 'center'}}>
                                <span className="l1"></span>
                                <span className="l2"></span>
                                <span className="l3"></span>
                                <span className="l4"></span>
                                <p className="preload-logo" style={{
                                    margin: '0',
                                    marginLeft: '3px',
                                    textAlign: 'center',
                                    selfAlign: 'center',
                                    width: '175px',
                                    height: '150px'
                                }}>MB</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            );
        }

        if (isMobile) {
            return(
                <div className="App">
                    <TopNav></TopNav>
                    <MainContent />
                    <MobileFooter></MobileFooter>
                </div>
            );
        }

        return (
            <div className="App">
                <TopNav></TopNav>
                <LeftSide></LeftSide>
                <MainContent></MainContent>
                <RightSide></RightSide>
                <footer>
                    <div id="about-m" style={{margin: '0', height: '0', width: '0'}}></div>
                    <div style={{margin: 'auto', width: '50%', height: '60px', textAlign: 'center'}}>
                        <a href="https://github.com/matt-bendel" style={{textDecoration: 'none'}}>
                            <p className="footer-p">Designed & Built by Matt Bendel</p>
                        </a>
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;
