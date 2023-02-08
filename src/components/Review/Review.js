import './Review.css'
import EmailSender from './EmailSender.js'

export default function Review() {
  return (
    <div className='ReviewContainer'>
        <h3 className='ReviewCaption'>
            This is not an official website of PSG LGD, it is a side project I made for me to practice Web Designing using ReactJS and BootStrap. 
            While you're at it, you can send your comments or toughts from the form below. Your inputs are greatly appreciated! 😄 Thank you. 💗
        </h3>
        <EmailSender />
    </div>
  )
}
