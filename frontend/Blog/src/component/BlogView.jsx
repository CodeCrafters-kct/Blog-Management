import React from 'react'
import {useGlobalContext} from "../context"
import "./blogview.css"

function BlogView() {
  const {userblog}=useGlobalContext();
  return (
    <div className="section-center">
        {userblog.map((blog,index)=>{
          console.log(blog)
            return(<div key={index} className="card help">
            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
              <p className="card-text">{blog.text}</p>
              <h5 className='card-text'>{blog.btype}</h5>
            </div>
          </div>
            )
        })}
    </div>
  )
}

export default BlogView