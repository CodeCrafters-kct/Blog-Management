import React,{useState} from 'react'

function EditBlogPage() {
  const[category,setCategory]=useState("")
  return (
    <>
      <div>
        <div className="modal-content rounded-4 shadow">
          <div className="modal-body py-0">
            <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalSignin">
              <div className="modal-dialog" role="document">
                <div className="modal-content rounded-4 shadow">
                  <div className="modal-header p-5 pb-4 border-bottom-0">
                    <h1 className="fw-bold mb-0 fs-2">Edit your Blog</h1>
                  </div>

                  <div className="modal-body p-5 pt-0">
                    <form className="">
                      <div className="form-floating mb-3">
                        <input type="text" className="form-control rounded-3" id="floatingInput" placeholder="Blog Title"></input>
                        <label htmlFor="floatingInput">Blog Title</label>
                      </div>
                      <div class="btn-group dropend">
                        <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          Category
                        </button>
                        <ul class="dropdown-menu">
                          <li onClick={()=> setCategory("Action")}><a class="dropdown-item">Action</a></li>
                          <li onClick={()=> setCategory("Thriller")}><a class="dropdown-item">Thirller</a></li>
                          <li onClick={()=> setCategory("Fantasy")}><a class="dropdown-item">Fantasy</a></li>
                          <li onClick={()=> setCategory("Animation")}><a class="dropdown-item">Animation</a></li>
                          <li onClick={()=> setCategory("Science Fiction")}><a class="dropdown-item">Science Fiction</a></li>

                        </ul> 
                      </div>
                      <div className="form-floating mb-3">
                        <input type="text" className="form-control rounded-3" id="floatingInput" placeholder="Select a catogory" value={category}></input>
                        <label htmlFor="floatingInput"></label>
                      </div>

                      <div className="form-floating mb-3">
                        <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label htmlFor="floatingPassword">Blog Content</label>
                      </div>
                      </div>
                      <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Submit</button>
                      
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

export default EditBlogPagef