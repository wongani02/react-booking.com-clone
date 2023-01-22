import React, { useState } from 'react'
import './list.css'
import HeaderComponent from '../../components/Header/Header'
import NavBar from '../../components/navBar'
import { useLocation } from 'react-router-dom'
import format from 'date-fns/format'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/SearchItem/SearchItem'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { Skeleton } from '@mui/material'

const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  
  return (
    <div>
      <NavBar/>
      <HeaderComponent type="list"/>
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
            <h1 className='lsTitle'>Search</h1>
            <div className='lsItem'>
              <label>Destination</label>
              <input type={'text'} placeholder={destination}/>
            </div>
            <div className='lsItem'>
              <label>Check-in Date</label>
              <span 
              onClick={()=>setOpenDate(!openDate)}
              >{`${format(date[0].startDate, "MM/dd/yy")} to ${format(date[0].endDate, "MM/dd/yy")}`}</span>
              {openDate && <DateRange
              onChange={(item) => setDate([item.selection])}
              ranges={date}
              minDate={new Date()}
              />}
            </div>
            <div className='lsItem'>
              <label>Options</label>
              <div className='lsOptions'>
              <div className='lsOptionItem'>
                <span lsOptionTitle>Min price <small>per night</small></span>
                <input type={'number'} className='lsOptionInput'/>
              </div>
              <div className='lsOptionItem'>
                <span lsOptionTitle>Max price <small>per night</small></span>
                <input type={'number'} className='lsOptionInput'/>
              </div>
              <div className='lsOptionItem'>
                <span lsOptionTitle>Adults <small>18+</small></span>
                <input 
                type={'number'} 
                min={1}
                placeholder={options.adult}
                className='lsOptionInput'
                />
              </div>
              <div className='lsOptionItem'>
                <span lsOptionTitle>Children <small>Below 17</small></span>
                <input 
                type={'number'} 
                min={0}
                placeholder={options.children}
                className='lsOptionInput'/>
              </div>
              <div className='lsOptionItem'>
                <span lsOptionTitle>Room <small>(s)</small></span>
                <input 
                type={'number'} 
                min={1}
                placeholder={options.room}
                className='lsOptionInput'/>
              </div>
              <div className='lsOptionItem'>
                <span lsOptionTitle>Room type <small>per night</small></span>
                <input 
                type={'text'} 
                placeholder={'standard'}
                className='lsOptionInput'/>
              </div>
              </div>
            </div>
            <button className='submitBtn'>Search</button>
          </div>
          <div className='listResult'>
            <Skeleton  
            variant="rectangular" 
            width={730} 
            height={120}
            animation='pulse'
            />
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
          </div>
        </div>
      </div>
      <MailList/>
      <Footer/>
    </div>
  )
}

export default List
