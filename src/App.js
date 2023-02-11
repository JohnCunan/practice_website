import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel'
import Achievements from './components/Achievements/Achievements';
import Matches from './components/Matches/Matches';
import Partners from './components/Partners/Partners';
import Review from './components/Review/Review';

import Roster from './components/Roster/Roster';
import Roster2 from './components/Roster2/Roster';
import Roster3 from './components/Roster3/Roster';
import Roster4 from './components/Roster4/Roster';
import Roster5 from './components/Roster5/Roster';

// import './components/NavigationBar/NavigationBar.css'
import { useState } from 'react'


export default function App() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="App">
      

      <div className='nav-container'>
       <div className='logo'>
        <img src={require('./components/images/Logo.png')}></img>
       </div>
       <div className='links'>
        <ul>
            <li><a href='#Roster'>Roster</a></li>
            <li><a href='#Achievements'>Achievements</a></li>
            <li><a href='#Matches'>Matches</a></li>
        </ul>
       </div>
       {showMenu ? (
        <div className='MenuLinks'>
          <span className='closeIcon'
            onClick={() => setShowMenu(!showMenu)}></span>
          <ul>
            <li><a href='#Roster' onClick={() => setShowMenu(!showMenu)}>Roster</a></li>
            <li><a href='#Achievements' onClick={() => setShowMenu(!showMenu)}>Achievements</a></li>
            <li><a href='#Matches' onClick={() => setShowMenu(!showMenu)}>Matches</a></li>
        </ul>
        </div>
       ) : null }
       <span className='buttonIcon' 
          onClick={() => setShowMenu(!showMenu)}></span>
    </div>



      <main>
        <Carousel />
        <div className='OrgContainer'>
          <img src={require('./components/images/Logo.png')}/>
          <div className='OrgDescriptionContainer'>
            <h3>WE ARE NEVER STOPPING</h3>
            <p>Paris Saint-Germain have been pioneers in the world of eSports by becoming the first big European professional to launch their professional eSports section back in 2016, and did so with big ambitions. </p>
          </div>
        </div>
        <h1 className='roster-header-text' id="Roster">DOTA 2 ROSTER</h1>
        <h3 className='roster-header-text-description'>THE 2022 DOTA PRO CIRCUIT SEASON 1 & 2 ROSTER</h3>
        <div className='RosterSection'>
            <div className='RosterCard'><Roster /></div>
            <div className='RosterCard'><Roster2 /></div>
            <div className='RosterCard'><Roster3 /></div>
            <div className='RosterCard'><Roster4 /></div>
            <div className='RosterCard'><Roster5 /></div>
        </div>
        <div className='AchievementsSection' id="Achievements">
          <h1 className='roster-header-text'>ACHIEVEMENTS</h1>
          <h3 className='roster-header-text-description'>TOURNAMENTS WON</h3>
          <Achievements />
        </div>
        <div className='MatchesSection' id="Matches">
          <h1 className='roster-header-text'>MATCHES</h1>
          <Matches />
        </div>
        <div className='PartnersSection'>
          <Partners />
        </div>
        <div className='ReviewSection'>
          <h1 className='roster-header-text'>DISCLAIMER</h1>
          <Review />
        </div>
      </main>
      
    </div>
  );
}

