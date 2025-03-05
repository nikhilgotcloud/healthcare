import React from 'react'
import Contacthero from '../../components/contacthero/Contacthero'
import Blogdetailmid from '../../components/blogdetailmid/Blogdetailmid'
import Reply from '../../components/reply/Reply'
import './blog-detail-style.css'

const Blogdetail = () => {
  return (
    <div>
      <Contacthero />
      <div className='main_blog_detail'>
        <Blogdetailmid />
      </div>
      <Reply />
    </div>
  )
}

export default Blogdetail