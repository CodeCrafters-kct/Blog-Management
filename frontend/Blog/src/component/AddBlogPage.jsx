import React, { useState } from 'react'
import {useGlobalContext} from "../context";
import { useNavigate } from 'react-router-dom'

function AddBlogPage() {
   const navigate = useNavigate();
   const[category,setCategory]=useState("")
   const [title,setTitle]=useState("")
   const [con,setCon]=useState("")
   const {uid,addBlog}=useGlobalContext();
   function get(){
    addBlog(title,con,category);
    navigate('/blogview')
   }
  return (
    <>
      <div>
        <div className="modal-content rounded-4 shadow">
          <div className="modal-body py-0">
            <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalSignin">
              <div className="modal-dialog" role="document">
                <div className="modal-content rounded-4 shadow">
                  <div className="modal-header p-5 pb-4 border-bottom-0">
                    <h1 className="fw-bold mb-0 fs-2">Enter the Blog Details</h1>
                  </div>

                  <div className="modal-body p-5 pt-0">
                    <form className="">
                      <div className="form-floating mb-3">
                        <input type="text" className="form-control rounded-3" id="floatingInput" onChange={(e)=>{setTitle(e.target.value)}} placeholder="Blog Title"></input>
                        <label htmlFor="floatingInput">Blog Title</label>
                      </div>
                      <div className="btn-group dropend">
                        <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          Category
                        </button>
                        <ul className="dropdown-menu">
                          <li onClick={()=> setCategory("Action")}><a className="dropdown-item">Action</a></li>
                          <li onClick={()=> setCategory("Thriller")}><a className="dropdown-item">Thirller</a></li>
                          <li onClick={()=> setCategory("Fantasy")}><a className="dropdown-item">Fantasy</a></li>
                          <li onClick={()=> setCategory("Animation")}><a className="dropdown-item">Animation</a></li>
                          <li onClick={()=> setCategory("Science Fiction")}><a className="dropdown-item">Science Fiction</a></li>

                        </ul> 
                      </div>
                      <div className="form-floating mb-3">
                        <input type="text" className="form-control rounded-3" id="floatingInput"  placeholder="Select a catogory" value={category}></input>
                        <label htmlFor="floatingInput"></label>
                      </div>

                      <div className="form-floating mb-3">
                        <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" onChange={(e)=>{setCon(e.target.value)}}></textarea>
                        <label htmlFor="floatingPassword">Blog Content</label>
                      </div>
                      </div>
                      <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit" onClick={get}>Submit</button>
                      
                      <hr className="my-4"></hr>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddBlogPage