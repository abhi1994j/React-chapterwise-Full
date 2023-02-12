import React,{useState} from 'react'

export default function FormValid() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
      
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>Enter your name:</label>
      <input type="text" name="username" value={inputs.username || ""} onChange={handleChange}/>
      <label>Enter your age:</label>
        <input type="number" name="age" value={inputs.age || ""} onChange={handleChange}/>
        <input type="submit" />
    </form>
    </div>
  )
}
        
