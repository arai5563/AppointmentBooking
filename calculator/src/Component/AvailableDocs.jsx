import React, { useEffect, useState } from 'react'

const AvailableDocs = () => {

    const [backend,setBackendData] = useState([{}]);

    useEffect(()=>{
        fetch("/api").then(
            res => res.json()
        ).then(data=>{
            setBackendData(data)
            console.log('data:', data);
         
        })
    },[]);

    console.log(backend)
  return (
    <div>
         {
             (typeof backend.users == "undefined") ? (
                 <p>Loading........</p>
             ): (
                backend.users.map((users,i)=>{
                    return(<p key={i}>{users}</p>)
                }) 
             )
         }
    </div>
  )
}

export default AvailableDocs
