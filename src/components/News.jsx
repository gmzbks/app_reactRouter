import React from 'react'
import {Link} from 'react-router-dom'

const News = () => {
  return (
    <>
      <h3>DAILY NEWS</h3>

<ul className='news'>
    <li>
        <Link to="1">
            <b>News1</b> 
        </Link>
    </li>
    <li>
        <Link to="2">
            <b>News2</b> 
        </Link>
    </li>
    <li>
        <Link to="3">
            <b>News3</b>
        </Link>
    </li>
    
</ul>

    </>
  )
}

export default News
