import React, { useState } from 'react'
import HeaderComponent from '../../components/Header/Header'
import NavBar from '../../components/navBar'
import './hotels.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCircleXmark, faCircleArrowRight, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      img: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      img: "https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      img: "https://images.pexels.com/photos/3201763/pexels-photo-3201763.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      img: "https://images.pexels.com/photos/3634741/pexels-photo-3634741.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      img: "https://images.pexels.com/photos/3144580/pexels-photo-3144580.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      img: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
  ]
  const handleOpen = (index) =>{
    setSlideNumber(index);
    setOpen(true);
  }
  const handelArrow = (direction) =>{
    let newSlideNum ;
    if(direction==='l'){
      newSlideNum = slideNumber ===0 ?setSlideNumber( photos.length-1): setSlideNumber(slideNumber-1);
    }else{
      newSlideNum = slideNumber === photos.length-1 ? setSlideNumber(0): setSlideNumber(slideNumber+1);
    }
  }
  return (
    <div>
      <NavBar/>
      <HeaderComponent type={"list"}/>
      <div className='hotelContainer'>
        {open && <div className='slider'>
          <FontAwesomeIcon 
          onClick={()=>{setOpen(false)}}
          icon={faCircleXmark} 
          className='close'
          />
          <FontAwesomeIcon 
          onClick={()=>{handelArrow('l')}}
          icon={faCircleArrowLeft}
          className='arrow'
          />
          <div className='sliderImgWrapper'>
            <img
            className='sliderImg'
            src={photos[slideNumber].img}
            alt=''
            />
          </div>
          <FontAwesomeIcon 
          onClick={()=>{handelArrow('r')}}
          icon={faCircleArrowRight} 
          className='arrow'
          />
        </div>}
        <div className='hotelWrapper'>
          <button className='bookNow'>Reserve or Book Now</button>
          <h1 className='hotelTitle'>Grand Hotel</h1>
          <div className='hotelAddress'>
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Elton st 125 New york</span>
          </div>
          <span className='hotelDistance'>
            Excellent Location - 500m from center
          </span>
          <span className='hotelPricingHighlight'>
            book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className='hotelImages'>
            {photos.map((photo, index)=>(
              <div className='hoteImgWrapper'>
                <img
                onClick={()=>{
                  // setSlideNumber(index);
                  // setOpen(!open);
                  handleOpen(index);
                }}
                src={photo.img}
                alt=''
                className='hotelImg'
                />
              </div>
            ))}
          </div>
          <div className='hotelDetails'>
              <div className='hotelDetailsTexts'>
                <h1 className='hotelTitle'>Stay in the heart of krakow</h1>
                <p className='hotelDesc'>
                So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos, but perhaps you're wondering how it's even possible to change the font of your text? Is it some sort of hack? Are you copying and pasting an actual font?
                Well, the answer is actually no - rather than generating fancy fonts, this converter creates fancy symbols. The explanation starts with unicode; an industry standard which creates the specification for thousands of different symbols and characters. All the characters that you see on your electronic devices, and printed in books, are likely specified by the unicode standard.
                </p>
              </div>
              <div className='hotelDetailsPrice'>
                <h1>Perfect for a 9-night stay!</h1>
                <span>
                  Located in the real heart of kratow, this property has an excellent location score of 9.8
                </span>
                <h2>
                  <b>$945</b> (9 nights)
                </h2>
                <button>Reserve or book Now!</button>
              </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel
