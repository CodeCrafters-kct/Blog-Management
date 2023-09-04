import React from 'react'
import {useGlobalContext} from "../context"
import "./blogview.css"
import { useNavigate } from 'react-router-dom'

function BlogView() {
  const navigate = useNavigate();
  const {blogList}=useGlobalContext();
  function gotoadd(){
     navigate("/addblog")
  }
  return (
    <div>
    <button type="button" class="btn btn-secondary" onClick={gotoadd}>Add Blog</button>
    <div className="section-center">
        {blogList.map((blog,index)=>{
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
    </div>
  )
}

export default BlogView