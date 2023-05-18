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
                    <input type="text" name="firstName" onChange={handleFirstName}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastName" onChange={handleLastName}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" onChange={handleEmail}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" onChange={handlePassword}/>
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" onChange={handleConfirmPassword}/>
                </div>
            </form>

            <div>
                <p>Your Form Data</p>
                <p>
                    <label>First Name</label> { firstName }
                </p>
                <p>
                    <label>Last Name</label> { lastName }
                </p>
                <p>
                    <label>Email</label> { email }
                </p>
                <p>
                    <label>Password</label> { password }
                </p>
                <p>
                    <label>Confirm Password</label> { confirmPassword }
                </p>
            </div>
        </div>
)}


export default Form;