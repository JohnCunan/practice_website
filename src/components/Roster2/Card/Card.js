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
            <h3>Mid</h3>
            <h3>🇲🇾</h3>
            <h3>萧瑟</h3>
          </div>
        </div>

        <div className='CardFront'>
        <img src={require('../images/player.png')} />
          <div className='CardDesc2'>
            <h1>NOTHINGTOSAY</h1>
            <h3>庄进祥</h3>
          </div>
        </div>
    </div>
  )
}