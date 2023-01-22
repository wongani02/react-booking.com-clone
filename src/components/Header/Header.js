import React, { useState } from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCar, faTaxi, faPlane } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { DateRange } from 'react-date-range'
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import format from 'date-fns/format'
import { useNavigate } from 'react-router-dom'


const HeaderComponent = ({type}) => {
  const [destination, setDestination] = useState('')
  const [openDate, setOpenDate] = useState(false);
  const navigate = useNavigate();
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  })
  const handleOption = (name, operation) => {
    setOptions(prev=>{return{
      ...prev, [name]: operation === "i"? options[name] +1: options[name] -1
    }})
  }

  const handleSearch = () => {
    navigate('/hotels', {state: {destination, date, options}})
  }
  return (
    <div 
    className='header' 
    >
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className='headerList'>
          <div className='headerListItem active'>
            <FontAwesomeIcon icon={faBed}/>
            <span className='listTitle'>Stays</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faPlane}/>
            <span className='listTitle'>Flights</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faTaxi}/>
            <span className='listTitle'>airport Taxi</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faCar}/>
            <span className='listTitle'>Car Rentals</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faBed}/>
            <span className='listTitle'>Places</span>
          </div>
        </div>
        { type !== "list" &&
          <>
        <h1 className='headerTitle'>A lifetime of discounts? It's Genius.</h1>
        <p className='headerDesc'>Find exclusive Genius rewards in every corner of the world!</p>
        <button className='headerBtn'>Sign in/ Register</button>
        <div className='headerSearch'>
          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faBed} className='headerIcon'/>
            <input
            onClick={()=>{setOpenOptions(false); setOpenDate(false);}}
            onChange={e=>setDestination(e.target.value)}
            type={'text'}
            placeholder='where are you going?'
            className='headerSearchInput'
            required={true}
            /> 
          </div>
          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon'/>
            <span onClick={()=>{setOpenDate(!openDate); setOpenOptions(false);}} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yy")} to ${format(date[0].endDate, "MM/dd/yy")}`}</span>
            {openDate && <DateRange
            editableDateInputs={true}
            onChange={(item)=> setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            minDate={new Date()}
            className='date'
            />}
          </div>
          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faBed} className='headerIcon'/>
            <span onClick={()=>{setOpenOptions(!openOptions);setOpenDate(false);}} className='headerSearchText'>{`${options.adult} adult - ${options.children} children -${options.room} room`}</span>
            {openOptions && <div className='options'>
              <div className="optionItem">
                <span className='optionText'>Adult</span>
                <div className='optionCounter'>
                  <button 
                  disabled={options.adult<=1}
                  onClick={()=>handleOption("adult", "d")}
                  className='optionCounterButton'>-</button>
                  <span className='optionCounterNumber'>{options.adult}</span>
                  <button 
                  onClick={()=>handleOption("adult", "i")}
                  className='optionCounterButton'>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className='optionText'>Children</span>
                <div className='optionCounter'>
                  <button 
                  disabled={options.children<=0}
                  onClick={()=>handleOption("children", "d")}
                  className='optionCounterButton'>-</button>
                  <span className='optionCounterNumber'>{options.children}</span>
                  <button 
                  onClick={()=>handleOption("children", "i")}
                  className='optionCounterButton'>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className='optionText'>Rooms</span>
                <div className='optionCounter'>
                  <button 
                  disabled={options.room<=1}
                  onClick={()=>handleOption("room", "d")}
                  className='optionCounterButton'>-</button>
                  <span className='optionCounterNumber'>{options.room}</span>
                  <button
                  onClick={()=>handleOption("room", "i")}
                  className='optionCounterButton'>+</button>
                </div>
              </div>
            </div>}
          </div>
          <div className='headerSearchItem'>
            <button className='headerBtn' onClick={handleSearch}>Search</button>
          </div>
        </div>
        </>}
      </div>
    </div>
  )
}

export default HeaderComponent
