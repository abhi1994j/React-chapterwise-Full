import { memo } from "react";
import React from 'react'

 function ReactMemo(props) {
    console.log("inner Component",props.data);
  return (
    <div>
      <h1>Home component</h1>
    </div>
  )
}
export default memo(ReactMemo)