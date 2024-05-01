import React, { useEffect, useState } from "react";
import './App.css';




const Form = () => {

    const onChangeFirstname = (event) => {
        console.log('Event --', event);
        //setValues({ firstname: event.target.value, ...values });
        setfirstname(event.target.value);
        console.log('Values set', firstname);
    }
    const onChangePassword = (event) => {
        setpassword(event.target.value);

        // setValues({ password: event.target.value, ...values })
    }
    // const [values, setValues] = useState({
    //     firstname: "",
    //     password: ""
    // });
    const [firstname, setfirstname] = useState("");
    const [password, setpassword] = useState("");

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);

        if (firstname && password) {
            setValid(true);
            setSubmitted(true);

        } else {
            setValid(false);


        }
        console.log('Values ', submitted, valid);



    }

    return (
        <>
            <div className="formcontainer">
                <form className="form" onSubmit={handleSubmit}>
                    <h4 className="heading">Registration form</h4>

                    <input type="text" placeholder="Username" onChange={onChangeFirstname} name='firstname' />
                    {submitted && !valid ? <div className="message"> Please enter username</div> : null}
                    <input type="password" placeholder="Password" onChange={onChangePassword} />
                    {submitted && !valid ? <div className="message"> Please enter password</div> : null}
                    <button type="submit" placeholder='Submit'>Submit</button>
                    {submitted && valid ? <div className="message"> Success</div> : null}


                </form>
            </div>

        </>
    );


}

export default Form;