import React, { useState } from 'react';


const Form = () => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        console.log('Val', e);
        setValue(e);
        console.log('Value', e);
    }
    return (
        <>
            <form>
                <div className="App">
                    <h3>Disable Button Challenge</h3>
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => handleChange(e.target.value)} />
                    <button disabled={!value}>Submit</button>
                </div>
            </form>
        </>
    )

}


export default Form;