import './App.css'
import * as React from "react"
import axios from 'axios'
import { useState,useEffect } from 'react'


function Notebook() {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:8000/getNotebook")
    .then(res=>{
      console.log(res.data)
      setPosts(res.data)
    }).catch(err=>{
      console.log(err)
    })
  },[])

  return (
    <div>
     <div>
       {posts.map((item:any,index:any)=>(
      <div key={index}>
        <h3>title : {item.title}</h3>
        <p>description : {item.description}</p>
      </div>
      )
      )}
     </div>
     {/* {handleData(posts)} */}
    </div>
  ) 
}

export default Notebook
