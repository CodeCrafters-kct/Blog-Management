import { Route,Routes } from 'react-router-dom'
import './App.css'
import Homepage from './component/HomePage'
import RegisterPage from './component/RegisterPage'
import LoginPage from './component/LoginPage'
import BlogView from './component/BlogView'
import AddBlogPage from './component/AddBlogPage'
import EditBlogPage from './component/EditBlogPage'
import AdminPage from './component/AdminPage'
import NavBar from './component/NavBar'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/register" element ={<RegisterPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path='/blogview' element={<BlogView/>}></Route>
        <Route path="/addblog" element ={<AddBlogPage/>}></Route>
        <Route path="/editblog" element={<EditBlogPage/>}></Route>
        <Route path='/admin' element={<AdminPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
