import React from 'react'
import './CreatePost.css';
import { Link } from 'react-router-dom';
const CreatePost = () => {
  return (
    <div className="navigationBar">
      <Link to="/admin" className='Link' >
      go back
      </Link>
    </div>
  )
}

export default CreatePost