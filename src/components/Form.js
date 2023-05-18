import React, {useState} from 'react';

const Form = (props) => {

    let bool = true

    const [info, setInfo] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const changeHandler = (e) => {
        setInfo({...info, [e.target.name]:e.target.value})
    }

    return (
        <div>
            <form>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstName" onChange={changeHandler}/>
                    {
                        info.firstName.length < 2 && info.firstName.length > 0 ?
                        <p>First Name must be at least 2 characters</p>:
                        null
                    }
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastName" onChange={changeHandler}/>
                    {
                        info.lastName.length < 2 && info.lastName.length > 0?
                        <p>Last Name must be at least 2 characters</p>:
                        null
                    }
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" onChange={changeHandler}/>
                    {
                        info.email.length < 2 && info.email.length > 0?
                        <p>Email must be at least 2 characters</p>:
                        null
                    }
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" onChange={changeHandler}/>
                    {
                        info.password.length < 8 && info.password.length > 0?
                        <p>Password must be at least 8 characters</p>:
                        null
                    }
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" onChange={changeHandler}/>
                    {
                        info.confirmPassword !== info.password?
                        <p>Passwords must match</p>:
                        null
                    }
                </div>
            </form>
        </div>
    )}


export default Form;