import React,{useState} from 'react'

export default function BasicStates() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' },{ text: 'Learn State' }]);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <h1>{todos[0].text}</h1>
      {/* <h1>{todos[1].text}</h1> */}
      <button onClick={() => setTodos([{...todos,text:"Learn UseState"}])}>Click me</button>
    </div>
  )
}
