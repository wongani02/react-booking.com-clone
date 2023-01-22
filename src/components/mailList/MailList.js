import React from 'react'
import './mailList.css'

const MailList = () => {
  return (
    <div className='mail'>
        <h1>Save time, save money</h1>
        <span className='mailDesc'>Sign up and we'll send the best deals for you</span>
        <div className='mailInputContainer'>
            <input placeholder='Enter your email' type={'email'}/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList
