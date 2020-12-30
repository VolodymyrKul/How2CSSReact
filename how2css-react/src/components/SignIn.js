import React from 'react';
import { useHistory } from "react-router-dom";

function SignIn(){
    const history = useHistory();
    const [userInfo, setUserInfo] = React.useState({email: 'ilivocs@gmail.com', password: '_Aa123456'})
    const [isLoagged, setIsLogged] = React.useState(false)
    //const url = "https://localhost:5001/api/users";

    function handleClick(event) {
        postData('https://localhost:5001/api/users/login', userInfo)
            .then(data => {
            //console.log(data); // JSON data parsed by `response.json()` call
            setIsLogged(Boolean(data));
            //console.log(isLoagged);
            if(isLoagged === true){
                localStorage.setItem("currentuser", userInfo.email);
                history.push("/account");
            }
        });
        event.preventDefault();
        //console.log(userInfo.email + ' ' + userInfo.password);
        //history.push("/account");
    }

    async function postData(url = '', data = {}){
        const response = await fetch(
            url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                body: JSON.stringify(data)
            }
        );
        return await response.json();
    }

    return(
        <form className="w-50 mx-auto mt-5">
            <div className="form-group">
                <div>
                    <input type="email" className="form-control" placeholder="Enter email" id="email" name="useremail" value={userInfo.email} onChange={event => setUserInfo({email: event.target.value, password: userInfo.password})}></input>
                </div>
                {isLoagged && 
                <div className="alert alert-danger" role="alert">
                    Authentication error!
                </div>}
            </div>
            <div className="form-group">
                <div>
                    <input type="password" className="form-control" placeholder="Enter password" id="pwd" name="userpass" value={userInfo.password} onChange={event => setUserInfo({email: userInfo.email, password: event.target.value})}></input>
                </div>
                {isLoagged && 
                <div className="alert alert-danger" role="alert">
                    Authentication error!
                </div>}
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
        </form>
    )
}

export default SignIn