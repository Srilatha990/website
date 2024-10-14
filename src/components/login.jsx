

import axios from "axios"
import { useFormik } from "formik"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";


export default function Login() {


    let navigate = useNavigate();
    const [cookies, setCookies, removeCookie] = useCookies('user-id');

    const formik = useFormik({
        initialValues: {
            UserId: '',
            Password: ''
        },
        onSubmit: (user) => {
            axios.get('http://127.0.0.1:3030/get-users')
                .then(response => {
                    var data = response.data.find(item => item.UserId === user.UserId);
                    if (data) {
                        if (data.Password === user.Password) {
                            setCookies('user-id', user.UserId);
                            navigate('/');
                        } else {
                            navigate('/error');
                        }
                    } else {
                        navigate('/error');
                    }
                })
        }
    })

    return (
        <div className="mt-5 mb-5">
            <div className="container">
                
                    <div className="row">
                        <div className="col-12 offset-lg-5">
                            <h2>User Login</h2>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg-12 offset-lg-5">
                            <form onSubmit={formik.handleSubmit}>
                                <dl>
                                    <dt>User Id</dt>
                                    <dd><input type="text" onChange={formik.handleChange} name="UserId" /></dd>
                                    <dt>Password</dt>
                                    <dd><input type="password" onChange={formik.handleChange} name="Password" /></dd>
                                </dl>
                                <button type="submit" className="btn btn-warning">Login</button>
                            </form>
                            <p className="mt-3">Don't you have an account ? <Link to='/register'>Reister Now</Link></p>
                        </div>
                    </div>
                
            </div>

        </div>
    )
}