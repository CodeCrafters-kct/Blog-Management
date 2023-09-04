import React, { useState } from "react";

function Home() {
    const [boo, setBoo] = useState(false)
    function click(){
        setBoo(true)
    }

    return <aside >
        <div className="row row-1" >
            <div className="container">
                    <div className="container-fluid">
                        <a href="#" className="txt" data-bs-toggle="modal" data-bs-target="#Modal"onClick={click} type="text">Welcome Admin</a>
                    </div>
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
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">reject</button>
              <button type="button" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>    
      </>
    }
    </aside>
}

export default Home;