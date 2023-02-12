import {BrowserRouter as Router, Route, Link, Routes,NavLink } from 'react-router-dom';
export default function DynamicRouting(){
  let user=[
    {name:'Home',id:1,hello:"k"},
    {name:'About',id:2,hello:"k"},
    {name:'Menu',id:3,hello:"k"},
    {name:'Contact',id:4,hello:"k"},
  ]
    return (
        <>
            {
              user.map((item)=>
              <div><NavLink to={"/user/"+item.id+"/"+item.name+"/"+item.hello}> {item.name} </NavLink></div>)
            }
        </>
    )
 }

