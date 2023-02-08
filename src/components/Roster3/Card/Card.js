import './Card.css'
import './FlipTransition.css'

export default function Card({onClick}) {
  return (
    <div className='Card' onClick={onClick}>
        <div className='CardBack'>
          <div className='PlayerDesc'>
            <h3>Current Role:</h3>
            <h3>Nationality:</h3>
            <h3>Alternate IDs:</h3>
          </div>
          <div className='PlayerInfo'>
            <h3>Offlane</h3>
            <h3> 	🇨🇳</h3>
            <h3>Zrd</h3>
          </div>
        </div>

        <div className='CardFront'>
        <img src={require('../images/player.png')} />
          <div className='CardDesc3'>
            <h1>FAITH_BIAN</h1>
            <h3>张睿达</h3>
          </div>
        </div>
    </div>
  )
}