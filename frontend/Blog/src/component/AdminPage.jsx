import React, { useState } from "react";
import {useGlobalContext} from "../context";
import { useNavigate } from 'react-router-dom';

function AdminPage() {
  const navigate = useNavigate();
    const [boo, setBoo] = useState(false)
    const [id,SetId]=useState(-1)
    const {adminBlogList,adminChange,adminBlog}=useGlobalContext();

    console.log(adminBlog)
    function setting(id){
      setBoo(true)
      SetId(id);
    }
    function checkout(id,value){
      adminChange(id,value)
      adminBlogList()
      setTimeout(() => {
        alert(adminBlog);
        navigate('/admin');
      }, 1500);
    }
    return <aside >
        <div className="row row-1" >
            <div className="container">
                    <div className="container-fluid mt-4">
                        <a className="d-flex justify-content-center h1">Welcome Admin</a>
                    </div>
            </div>
        </div>
        <div className="section-center">
        <div>
          {adminBlog.map((blog,index)=>{ 
            console.log(blog)
              return(<div key={index} className="card help mt-3">
              <div className="card-body">
                <h5 className="card-title"  data-bs-toggle="modal"  key={index} data-bs-target="#Modal" onClick={()=>{setting(index)}}>{blog.title}</h5>
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
              <h1 className="modal-title fs-5" id="exampleModalLabel">{adminBlog[id].title}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <h2 className="modal-title fs-5" id="exampleModalLabel">{adminBlog[id].text}</h2>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={()=>checkout(adminBlog[id].bid,0)}>reject</button>
              <button className="btn btn-primary" onClick={()=>checkout(adminBlog[id].bid,1)}>Submit</button>
            </div>
          </div>
        </div>
      </div>    
      </>
    }
    </aside>
}

export default AdminPage;