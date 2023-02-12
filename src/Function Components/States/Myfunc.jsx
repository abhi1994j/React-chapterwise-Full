import React, { useState } from 'react'

const Myfunc = () => {
    const [count, setCount] = useState(0);
    return (
      <div>
        <h4 className="display-4">{count}</h4>
        <button onClick={() => setCount(count + 1)}>Update</button>
      </div>
    )
}

export default Myfunc;