import React, { useState } from "react";
import {useGlobalContext} from "../context";
import { useNavigate } from 'react-router-dom';

function AdminPage() {
  const navigate = useNavigate();
    const [boo, setBoo] = useState(false)
    const {adminChange,adminBlog}=useGlobalContext();
    console.log(adminBlog)
    function checkout(id,value){
      adminChange(id,value)
    }
    return <aside >
        <div className="row row-1" >
            <div className="container">
                    <div className="container-fluid">
                        <a href="#" className="txt" type="text">Welcome Admin</a>
                    </div>
            </div>
        </div>
        <div className="section-center">
        <div>
          {adminBlog.map((blog,index)=>{ 
            console.log(blog)
              return(<div key={index} className="card help mt-3">
              <div className="card-body">
                <h5 className="card-title"  data-bs-toggle="modal" data-bs-target="#Modal" onClick={()=>{console.log(adminBlog);setBoo(true)}}>{blog.title}</h5>
              </div>
            </div>
              )
          })}
        </div>
        </div>
        {boo && 
            <>
            <div className="modal fade" id="Modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">reject</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
            </div>
          </div>
        </div>
      </div>    
      </>
    }
    </aside>
}

export default AdminPage;