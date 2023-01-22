import React from 'react'
import './searchItem.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
      <img
      src='https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600'
      alt=''
      className='siImg'
      />
      <div className='siDesc'>
        <h1 className='siTitle'>Tower Street Apartments</h1>
        <span className='sidistance' >500m from center</span>
        <span className='siTaxiOp'>Free airport Taxi</span>
        <span className='siSubtitle'>Studio apartment with air conditioning</span>
        <span className='siFeatures'>Entire Studio - 1 bathroom - 21m 1 full bed</span>
        <span className='siCancel'>
          Free cancellation
        </span>
        <span className='siCancelOp'>
          you can cancel later, lock this price
        </span>
      </div>
      <div className='siDetails'>
        <div className='siRating'>
          <span>Excellent</span>
          <button className=''>8.9</button>
        </div>
        <div className='siDetailText'>
          <span className='siPrice'>$123</span>
          <span className='siTaxOp'>Includes taxes and fees</span>
          <button className='checkBtn'>See availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
