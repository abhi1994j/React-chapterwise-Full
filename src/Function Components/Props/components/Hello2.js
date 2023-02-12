import React from 'react'
import Login from './Login'
import Logout from './Logout'

export default function Hello2(props) {
    const isLogin = true
    const conRend = () => {
        if(isLogin){
            return <Login />
        }else{
            return <Logout />
        }
    }
  return (
    <div>
      {conRend()}
      <h1>hello world {props.text.name}</h1>
    </div>
  )
}
