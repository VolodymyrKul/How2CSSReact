import React, {useEffect} from 'react';
import {
    Link
  } from "react-router-dom";
import { useHistory } from "react-router-dom";
  

function Account(){
    const history = useHistory();
    const [profileInfo, setProfileInfo] = React.useState({id: 1, firstName: 'Loading...', lastName: '', email: 'Loading...', phone: 'Loading...', password: '', role: 'Loading...'})
    const [achievOptions, setAchievOptions] = React.useState(false)

    useEffect(()=>{
        let mounted = true;
        //getData('https://localhost:5001/api/users/info/')
        fetch('https://localhost:5001/api/users/info/'+localStorage.getItem("currentuser"))
        .then(response => response.json())
        .then(data => {
            if(mounted){
            setProfileInfo(data);
            }
        })
        return () => mounted = false;
    },[profileInfo]);

    function changeOptions(event){
        setAchievOptions(!achievOptions);
    }

    function goToSave(){
        history.push("/saveachiev?comcnt=24&corcnt=21&curmark=39&lvlparam=CSS_Part1");
    }

    return(
        <div className="container">
            <div className="btn-group-vertical w-25 mt-5" style={{float: "left"}}>
                <button type="button" className="btn btn-primary">Profile</button>
                <button type="button" className="btn btn-primary">Open test</button>
                <button type="button" className="btn btn-primary dropup" onClick={changeOptions}>
                    Achievements<span style={{float: "right", cursor: "pointer"}}><i className={`fas ${achievOptions ? 'fa-caret-up' : 'fa-caret-down'}`}></i></span>
                </button>
                {achievOptions && <Link to="/ownachievs" className="w-100 btn btn-primary">My achievements</Link>}
                {achievOptions && <Link to="/antachievs" className="w-100 btn btn-primary">Another user achievements</Link>}
                {achievOptions && <Link to="/compareachievs" className="w-100 btn btn-primary">Compare achievements</Link>}              
                <button type="button" className="btn btn-primary">Option 1</button>
                <button type="button" className="btn btn-primary" onClick={goToSave}>Save achivement</button>
                <button type="button" className="btn btn-primary">About</button>
            </div>
            <div className="w-50 mt-5" style={{float: "left"}}></div>
            <div className="w-25 mt-5" style={{float: "left"}}>
                <div className="card mx-auto bg-secondary" style={{width: "300px", position: "relative"}}>
                    <img className="card-img-top" style={{width: "300px", height: "400px"}} src="https://www.clker.com/cliparts/g/l/R/7/h/u/teamstijl-person-icon-blue.svg" alt="Img"></img>
                    <div className="card-body">
                        <h4 className="card-title" style={{textAlign: "center"}}>{profileInfo.firstName + ' ' + profileInfo.lastName}</h4>
                        <h5 className="card-title" style={{textAlign: "center"}}>{profileInfo.email}</h5>
                        <h5 className="card-title" style={{textAlign: "center"}}>{profileInfo.phone}</h5>
                        <h5 className="card-title" style={{textAlign: "center"}}>{profileInfo.role}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account