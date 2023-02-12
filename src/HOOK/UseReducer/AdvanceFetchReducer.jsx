import React, { useEffect, useState } from 'react'

const AdvanceFetchReducer = () => {
    const [loding,setLoding]=useState(true)
    const [error,setError]=useState('')
    const [post,setPost]=useState({})

    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data =>{
      setLoding(false)
      setPost(data)
      setError('')
  })
  .catch(error=>{
    setLoding(false)
    setPost({})
    setError('There was a problem')
  })

    },[])
  return (
    <div>
      <h1>Advanve reducer api call normaly use useState hooks</h1>

      {loding ? 'Lodding....' :post.body }
      
      {/* {post.title}
      <p></p>
      {post.body} */}
     
      {error || null}
    </div>
  )
}

export default AdvanceFetchReducer
