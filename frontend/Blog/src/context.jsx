import React,{useContext,useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const AppContext=React.createContext();

const AppProvider=({children})=>{
    const navigate = useNavigate();
    const baseURL="http://127.0.0.1:8000/";
    const [isLogedIn,setIsLogedIn]=useState(false)
    const [userName,setUserName]=useState("")
    const [uid,SetUid]=useState(-1)
    const [blogList,setBlogList]=useState([])
    const [conBlog,setConBlog]=useState({})
    const [adminBlog,setAdminBlog]=useState([])
    const [userblog,setUserBlog]=useState([])

    const registeUser=async(username,password)=>{
        const res=await axios.post(baseURL+'appuser',{
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:{
                "username":username,
                "password":password
            }
        });
        if(res.data.message){
            alert(res.data.message);
        }else{
            alert("ADDED!!!")
            setIsLogedIn(true);
            setUserName(username);
            SetUid(res.data.uid);
        }
    }

    const authUser=async(username,password)=>{
        const res=await axios.post(baseURL+'getuser',{
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:{
                "username":username,
                "password":password
            }
        });
        if(res.data.message){
            alert(res.data.message);
        }else{
            setIsLogedIn(true);
            setUserName(username);
            if(userName=="admin"){
                navigate("/admin")
            }
            SetUid(res.data.uid);
        }
    }

    const getallblog= async()=>{
        const res=await axios.get(baseURL+'blog',{
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        });
            if(res.data.message){
                alert(res.data.message);
            }else{
                setBlogList(res.data);
            }
    }

    const getOneBlog=async(id)=>{
        const res=await axios.get(baseURL+'blog/'+id,{
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
            if(res.data.message){
                alert(res.data.message);
            }else{
                setConBlog(res.data);
            }
    }

    const addBlog=async(title,text,btype)=>{
        console.log(title,text,btype)
        const res=await axios.post(baseURL+'blog',{
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:{
                "uid":uid,                         
                "title":title,
                "text":text,
                "btype":btype
            }

        })
            if(res.data.message){
                alert(res.data.message);
            }else{
                setBlogList(res.data)
            }
    }

    const getUserBlog= async (uid)=>{
        const res=await axios.get(baseURL+'update/'+id,{
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
            if(res.data.message){
                alert(res.data.message);
            }else{
                setUserBlog(res.data)
            }
    }

    const updateBlog=async(bid,title,text,btype)=>{
        const res=await axios.post(baseURL+'update',{
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:{
                "bid":bid,                         
                "title":title,
                "text":text,
                "btype":btype
            }

        })
            if(res.data.message){
                alert(res.data.message);
            }else{
                alert("updated!!")
            }
    }

    const delBlog=async(bid)=>{
        const res=await axios.delete(baseURL+'update',{
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:{
                "bid":bid
            }
        })
            if(res.data.message){
                alert(res.data.message);
            }else{
                alert("Deleted!!!")
            }
    }

    const adminChange=async(id,value)=>{
        const res=await axios.post(baseURL+'change/'+id+'/'+value,{
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
            if(res.data.message){
                alert(res.data.message);
            }else{
                alert(res.data);
            }
    }

    const adminBlogList= async()=>{
        const res=await axios.get(baseURL+'admin',{
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }

        })
            if(res.data.message){
                alert(res.data.message);
            }else{
                setAdminBlog(res.data)
            }
    }

    return <AppContext.Provider value={{isLogedIn,userName,uid,blogList,conBlog,adminBlog,userblog,setIsLogedIn,setUserName,SetUid,
        setBlogList,setConBlog,setAdminBlog,setUserBlog,registeUser,authUser,getallblog,getOneBlog,addBlog,getUserBlog,updateBlog,
        delBlog,adminBlogList,adminChange
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}

export{AppProvider,AppContext}