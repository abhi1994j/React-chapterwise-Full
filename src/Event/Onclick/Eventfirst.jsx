import React from 'react'

 const Eventfirst = () => {
    const data = "Abhishek"
    const avi = () => {
        alert(data)
    }
    //className: 'my-2' means margin y-axis / mt-2 mb-2 both are same
    return (
        <div  className='d-flex justify-content-center my-2'>
            <button onClick={avi}>click that!</button>
        </div>
    )
}
export default Eventfirst;