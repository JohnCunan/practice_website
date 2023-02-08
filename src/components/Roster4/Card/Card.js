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
            <h3>Support</h3>
            <h3> 	🇨🇳</h3>
            <h3>萧瑟</h3>
          </div>
        </div>

        <div className='CardFront'>
        <img src={require('../images/player.png')} />
          <div className='CardDesc'>
            <h1>XINQ</h1>
            <h3>赵子星</h3>
          </div>
        </div>
    </div>
  )
}