import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { data } from '../data'

const Content = () => {
    const parameter = useParams();
    const params = parameter.newsId
    const navigate =  useNavigate();
    const handleGoBack = () => {
        navigate('/news');
      };

    return (
        <div className="list-item">
            <h3>News {data[params-1].id}</h3>
            <h3>{data[params-1].header}</h3>
            <p>{data[params-1].text}</p>  
            <button onClick={handleGoBack}>Geri</button>
        </div>
    )
}

export default Content
