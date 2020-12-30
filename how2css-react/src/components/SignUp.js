import React from 'react'

function SignUp(){
    return(
        <form className="w-50 mx-auto mt-5">
            <div className="form-group">
                <div>
                    <input type="text" className="form-control" placeholder="Enter name" id="name" name="username"></input>
                </div>
            </div>
            <div className="form-group">
                <div>
                    <input type="text" className="form-control" placeholder="Enter surname" id="surname" name="usersurname"></input>
                </div>
            </div>
            <div className="form-group">
                <div>
                    <input type="tel" className="form-control" placeholder="Enter phone" id="phone" name="userphone"></input>
                </div>
            </div>
            <div className="form-group">
                <div>
                    <input type="email" className="form-control" placeholder="Enter email" id="email" name="useremail"></input>
                </div>
            </div>
            <div className="form-group">
                <div>
                    <input type="password" className="form-control" placeholder="Enter password" id="pwd" name="userpass"></input>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <div className="alert alert-danger mt-4" role="alert">
                User did not register!
            </div>
            <div className="alert alert-success mt-4" role="alert">
                User registered success!
            </div>
        </form>
    )
}

export default SignUp