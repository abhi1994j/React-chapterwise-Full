import React,{useRef} from 'react'

export default function UncontrolExample() {
    const inputRef = useRef(null);
    const handleSubmitButton = () => {
      alert(inputRef.current.value);
    };
    return (
      <div className="App">
          <h1>UnControl Component</h1>
        <input type="text" ref={inputRef} />
        <input type="submit" value="submit" onClick={handleSubmitButton} />
      </div>
    );
}
