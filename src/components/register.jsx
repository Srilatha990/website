

import axios from "axios"
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";


export default function Register() {

    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            UserId: '',
            UserName: '',
            Password: '',
            Email: '',
            Mobile: ''
        },
        onSubmit: (user) => {
            axios.post(`http://127.0.0.1:3030/register-user`, user)
                .then(() => {
                    alert('User Registered');
                    navigate('/login');
                })
        }
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 offset-lg-5">
                <h3>Register User</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12 offset-lg-5 mt-5 mb-5">
                    <div>
                        <form onSubmit={formik.handleSubmit}>
                            <dl>
                                <dt>UserId</dt>
                                <dd><input type="text" onChange={formik.handleChange} name="UserId" /></dd>
                                <dt>User Name</dt>
                                <dd><input type="text" onChange={formik.handleChange} name="UserName" /></dd>
                                <dt>Password</dt>
                                <dd><input type="password" onChange={formik.handleChange} name="Password" /></dd>
                                <dt>Email</dt>
                                <dd><input type="email" onChange={formik.handleChange} name="Email" /></dd>
                                <dt>Mobile</dt>
                                <dd><input type="text" onChange={formik.handleChange} name="Mobile" /></dd>
                            </dl>
                            <button type="submit" className="btn btn-warning">Register</button>
                        </form>
                        <p className="mt-3">Already have an account? <Link to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}