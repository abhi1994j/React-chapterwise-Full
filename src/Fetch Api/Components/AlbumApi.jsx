import React,{useState,useEffect} from 'react'

const AlbumApi = () => {
    const [data,setData]=useState([])
    const getData=async()=>{
        const response=await fetch('https://jsonplaceholder.typicode.com/albums')
        const data1=await response.json();
        setData(data1);
        console.log(data1);
    }
    useEffect(()=>{
        getData();
    },[])
  return (
    <>
            <h1>AlbumApi</h1>
        <div className="container">
            {data.map((user)=>{
                return (
                    <div key={user.userId}>
                        <h1>{user.id}</h1>
                        <h1>{user.title.slice(0,10)}</h1>
                    </div>
                    
                )
            })}
        </div>
    </>
  )
}

export default AlbumApi