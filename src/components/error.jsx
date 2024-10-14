

import { Link } from "react-router-dom";


export default function Error() {
    return (
        <div>
            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className="col-12 offset-lg-5">
                        <div>
                            <h2>Invalid Credentials</h2>
                            <Link to="/login">Try Again</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}