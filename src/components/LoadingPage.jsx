import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import loading from '../style/image/loading.gif'

const LoadingPage = () => {
    const navigate = useNavigate();
   
    useEffect(()=>{
        setTimeout(()=> {
            navigate ("/GamzeBakisTiryaki/news")
        }, 800)
    })

  return (
    <>
      <img className="loadimg"src={loading} alt="loading" />
    </>
  )
}

export default LoadingPage
