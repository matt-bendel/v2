import React from 'react';
import TopNav from './components/TopNav/TopNav';
import LeftSide from './components/Sides/LeftSide'
import MainContent from './components/Content/MainContent'
import RightSide from './components/Sides/RightSide';

import './App.css';
import './css/styles.css';

function App() {
  return (
    <div className="App">
        <TopNav></TopNav>
        <LeftSide></LeftSide>
        <MainContent></MainContent>
        <RightSide></RightSide>
    </div>
  );
}

export default App;
