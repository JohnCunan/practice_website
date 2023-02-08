import './Achievements.css'

export default function Achievements() {
  return (
    <div className='ImagesContainer'>
        <div className='Ac1'><img src={require('./images/t1.png')} /></div>
        <div className='Ac2'><img src={require('./images/t2.png')} /></div>
        <div className='Ac3'><img src={require('./images/t3.png')} /></div>
        <div className='Ac4'><img src={require('./images/t4.png')} /></div>
    </div>
  )
}
