import React,{useState} from 'react'

export default function ControlExample() {
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e) => {
      setInputValue(e.target.value)
    }
    const handleSubmitButton = (e) => {
        e.preventDefault();
      alert(inputValue);
    };
    return (
        
      <div className="App">
          <h1>control Compunent</h1>
        <input value={inputValue} onChange={handleInputChange} />
        <input type="submit" value="submit" onClick={handleSubmitButton} />
      </div>
    );
}
