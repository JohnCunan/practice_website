import './Roster.css'
import {CSSTransition} from 'react-transition-group'
import { useState } from 'react'
import Card from './Card/Card'

export default function Roster3() {

  const [showFront, setShowFront] = useState(true);

  return (
    <div className='MainRosterContainer'>
      <div className='RosterContainer'>
        <CSSTransition
          in={showFront}
          timeout={300}
          classNames='flip'
        >
          <Card onClick={() => {
            setShowFront((v) => !v);
          }}/>
        </CSSTransition>  
      </div>
    </div>
  )
}
