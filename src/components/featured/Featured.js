import React from 'react'
import './featured.css'

const Featured = () => {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <img 
        className='featuredImg'
        alt=''
        src='https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600'/>
        <div className='featuredTitles'>
            <h1>Escobar</h1>
            <h2>231 properties</h2>
        </div>
      </div>
      <div className='featuredItem'>
        <img 
        className='featuredImg'
        alt=''
        src='https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600'/>
        <div className='featuredTitles'>
            <h1>London</h1>
            <h2>231 properties</h2>
        </div>
      </div>
      <div className='featuredItem'>
        <img 
        className='featuredImg'
        alt=''
        src='https://images.pexels.com/photos/261204/pexels-photo-261204.jpeg?auto=compress&cs=tinysrgb&w=600'/>
        <div className='featuredTitles'>
            <h1>Hawaii</h1>
            <h2>231 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured
