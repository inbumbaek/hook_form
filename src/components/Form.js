import React, {useState} from 'react';

const Form = (props) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
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