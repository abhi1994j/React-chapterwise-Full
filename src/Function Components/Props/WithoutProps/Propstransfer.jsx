import React from 'react'

export default function Propstransfer({ myobj }) {
    const {name,surname,age}=myobj
  return (
    <>
      {/* <h1>This is my name:{myobj.name}</h1>
      <h1>This is my Surname:{myobj.surname}</h1>
      <h1>This is my Age:{myobj.age}</h1> */}
      <h1>This is my name:{name}</h1>
      <h1>This is my name:{surname}</h1>
      <h1>This is my name:{age}</h1>   
    </>
  )
}