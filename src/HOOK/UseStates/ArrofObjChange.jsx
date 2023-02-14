import React, { useState } from 'react'

export default function ArrofObjChange() {
    const initState = [
        { name: "Abhishek", gender: "Male", age: 89 },
        { name: "Priyanka", gender: "Female", age: 98 },
        { name: "Debanjan", gender: "male", age: 90 }
    ];

    const [obj, setobj] = useState(initState);
    function Changefunc1(e) {
        e.preventDefault();
        setobj((item)=>{
            item[0].name='pallab';
            item[1].age=33;
            item[2].gender='female';
            return [...item]
        })
    }
    return (
        <>
            {
                obj.map((item)=>
                    <div key={item.age}>
                        <h3><nav>{item.name}</nav></h3>
                        <h3><nav>{item.gender}</nav></h3>
                        <h3><nav>{item.age}</nav></h3><hr />
                    </div>
                )
            }
            <button onClick={Changefunc1}>change it</button>
        </>
    )
}
