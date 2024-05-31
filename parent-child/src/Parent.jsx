import React from "react";
import Child from './Child';
import { useState } from "react";
import './App.css';

const Parent = () => {
    const [value, setValue] = useState('I am parent');
    return (

        <>

            <h3>Update Parent State Challenge (Using Callback)</h3>
            <div className="wrapper">
                <div>Parent</div>
                <div className="box-wrapper">{value}</div>
            </div>

            <div className="wrapper">
                <Child setValue={setValue} />
            </div>
        </>
    )
}

export default Parent;