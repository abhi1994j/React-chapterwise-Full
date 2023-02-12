import React from 'react'
import style from '../miStyle.module.css'
import '../student.css'

export default function ReactCss() {

    const myStyle={
        color:"red",
        backgroundColor:"pink",
        padding:"15px",
        fontFamily:"Sans-Serif",
        border:"2px solid blue"
    }
  return (
    <div>
      <h1>React in css use inline</h1>
      <h1 style={{color:"red"}}>hello student welcome to webskitters</h1>
      {/* caammelcase component */}
      <h1 style={{backgroundColor:"orange"}}>hello world welcome to webskitters</h1>
      {/* you can use object as a css */}
      <h1 style={myStyle}>hello welcome to webskitters academy</h1>
      <div className='raj'>
          hello stdiej
      </div>
      <h1 className={style.hero}>Using module in css</h1>
    </div>
  )
}
