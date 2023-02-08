import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css'

export default function IndividualIntervalsExample() {
  return (
    <Carousel className='CarouselContainer'>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../images/img1.jpg')}
          alt="First slide"
        />
        <Carousel.Caption className='CaptionContainer'>
          <h3>PSG LGD Wins Riyadh Masters</h3>
          <p>PSG LGD Wins a Major tournament earning a spot at The International 11</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../images/img2.jpg')}
          alt="Second slide"
        />
        <Carousel.Caption className='CaptionContainer'>
          <h3>PSG LGD with a new Roster</h3>
          <p>New players XinQ, y, NothingToSay, Faith_Bian</p>
        </Carousel.Caption>
      </Carousel.Item>

      

    </Carousel>
  );
}