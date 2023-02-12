import React, { useReducer,useEffect } from 'react'
const initialstate={
    loding:true,
    error:'',
    post:{}
}
const reducer=((state,action)=>{
    switch(action.type){
        case 'SUCCESS':
            return{
                loding:false,
                post:action.result,
                error:''
            }
            case 'ERROE':
            return{
                loding:false,
                post:{},
                error:'There was a problems'
            }
            default:
                return state
    }
})

const GetFetchReducer = () => {
    const [state,dispatch]=useReducer(reducer,initialstate)
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data =>{
     dispatch({type:'SUCCESS',result:data})   
    })
    .catch(error=>{
      dispatch({type:'ERROE'})  
    })
  
      },setTimeout(()=>{return  },10000),[])
  return (
    <div>
      <h1>get api use useReducer hooks</h1>
      
      {state.loding ? 'Lodding....' : state.post.body }
      
         
      {state.error || null}
    </div>
  )
}

export default GetFetchReducer
