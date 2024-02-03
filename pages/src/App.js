import React, { useEffect, useState } from 'react'
import "./App.css"
function App() {
  const[data,setdata]=useState([])
  const[pageno,setpageno]=useState(0);

  useEffect(()=>{
      handleData()
  },[pageno])

const handleData=async()=>{
  const reserve=await fetch(`https://dummyapi.io/data/v1/user?page=${pageno}&limit=5`,
  {
      method:'GET',
      headers:{
          "app-id":"6507d7adad93264b1830f6b1"
      }
  })
  const newdata=await reserve.json()
  setdata(newdata.data)
  
}


const handlePageno=(num)=>{
  setpageno(num)
}

return (
  <>
  <h1>Pagination</h1>
  {
      data.map((user)=>(
         <div className='row ab '>
          <div className='col-md-4 abh'>
              <img src={user.picture} alt={user.lastName} className='img-fluid ' />
          </div>
          <div className='col-md-8 abhi'>
              <h4>{user.firstName} {user.lastName}</h4>
              <h6>{user.id}{user.lastName}</h6>
          </div>
         </div>
      ))
     
  }
  
 
  
  {
      [1,2,3,4,5,6,7].map((num)=>(
          <button  className='btn btn-primary me-3 mt-.1' id="move" onClick={()=>handlePageno(num)}>{num}</button>
      ))
  }
  

  
  </>
)
}

export default App
