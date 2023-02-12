import React from 'react'
import { useState, useReducer } from 'react'

const initialState = [
    {id:Date.now(),name:"raju",email:"raju@gmail.com"}
]

function reducer(state, action) {
    switch (action.type) {
        case "add":
            return [...state, action.payload]
        case "delete":
            return state.filter((contact)=>{
                return contact.id !== action.payload.id
            })
            default :
           return state

    }
}
const AdvanceReduce = () => {

  const [state, dispach] = useReducer(reducer, initialState)
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  console.log(state);

  const addContact=(e)=>{
      e.preventDefault()
      const contact={
          id:Date.now(),
          name,
          email,
      }
      setName("")
      setEmail("")
      dispach({type:"add",payload:contact})

  }

  return (
      <div className='container'>
          <h1>Advance level example in react Reducer hooks</h1><hr />
          <form onSubmit={addContact}>
              <input type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/><p/>
              <input type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
              <div className='bt'>
                  <button>AddContact</button>
              </div>
          </form>
          <div>
              <ul>
                  {state.map(contact =>{
                      return (<li key={contact.id}>
                          <h2 >{contact.name} <br/>
                          {contact.email}</h2>
                          <div>
                              <button onClick={()=> dispach({type:"delete",payload:{id:contact.id}})}>Delete</button>
                          </div>
                      </li>
                      )
                  })}
              </ul>
          </div>
          
      </div>
  )
}

export default AdvanceReduce;
