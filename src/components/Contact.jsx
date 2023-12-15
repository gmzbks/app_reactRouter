import React from 'react'
import { Link } from 'react-router-dom'
import linkedinİcon from '../style/image/linkedin.svg'
import githubİcon from '../style/image/github.svg'
import instagramİcon from '../style/image/instagram.svg'
const Contact = () => {
  const name = "Gamze"
  const surName = "BAKİS TİRYAKİ"
  const email = "gmzbks@gmail.com"
  const address =""
  const phoneNumber = +460734966464
  //const shareLink = 'https://www.linkedin.com/in/gamze-bakis-tiryaki-6671a0290/'
  return (
    <div className='contact-info'>
      <h3>Contact Informatıon</h3>
    <p>
        <strong>Name:</strong> {name}
    </p> 
    <p>
        <strong>SurName:</strong> {surName}
    </p> 
    <p className='email'>
        <strong>Email:</strong> {email}
    </p> 
    <p className='address'>
        <strong>Adress:</strong> {address}
    </p> 
    <p className='phone'>
        <strong>Phone:</strong> {phoneNumber}
    </p> 
   <p className='social-icons'>
    <Link className='icon' to='https://www.linkedin.com/in/gamze-bakis-tiryaki-6671a0290/' > <img src={linkedinİcon} alt="linkedinİcon" /></Link>
    <Link className='icon'to='https://github.com/gamzebakis'><img src={githubİcon} alt="githubİcon" /></Link> 
    <Link className='icon'to='https://www.instagram.com/gmzbks/'><img src={instagramİcon} alt="githubİcon" /></Link> 
    
    </p>
    </div>
  )
}

export default Contact
