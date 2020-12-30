import React, {useEffect} from 'react';
import {
    useLocation
  } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function SaveAchiev() {
    const [qparams, setQparams] = React.useState({lvl: 'tmp', comCnt: '', corCnt: '', curMark: ''})
    const [saveparam, setSaveparam] = React.useState({title: '', notes: '', levelTitle: '', userEmail: '', completedCount: 0, correctCount: 0, currentMark: 0})
    const [formparams, setFormparams] = React.useState({ftitle: 'Task1 AchivTest', fnotes: 'Need to learn test'})
    const [isSaved, setIsSaved] = React.useState(false);

    let query = useQuery();

    useEffect(() => {
        //let mounted = true;
        //if(mounted){
            setQparams({lvl: query.get('lvlparam'), comCnt: query.get('comcnt'), corCnt: query.get('corcnt'), curMark: query.get('curmark') });
            //setQname(query.get('name'));
            console.log(qparams.lvl);
            console.log(qparams.comCnt);
            console.log(qparams.corCnt);
            console.log(qparams.curMark);
        //}
        //return () => mounted = false;
    },[qparams.lvl, qparams.comCnt, qparams.corCnt, qparams.curMark])

    function handleClick(event) {
        setSaveparam({title: formparams.ftitle, 
            notes: formparams.fnotes, 
            levelTitle: qparams.lvl, 
            userEmail: localStorage.getItem("currentuser"), 
            completedCount: parseInt(qparams.comCnt,10), 
            correctCount: parseInt(qparams.corCnt,10), 
            currentMark: parseInt(qparams.curMark,10)});
        postData('https://localhost:5001/api/achievdatas/save', saveparam)
            .then(data => {
            //console.log(data); // JSON data parsed by `response.json()` call
            setIsSaved(Boolean(data));
            //console.log(isLoagged);
        });
        event.preventDefault();
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
                    <input type="email" className="form-control" placeholder="Enter achievement title" id="email" name="achievtitle" value={formparams.ftitle} onChange={event => setFormparams({ftitle: event.target.value, fnotes: formparams.fnotes})}></input>
                </div>
            </div>
            <div className="form-group">
                <div>
                    <textarea className="form-control" style={{height: "150px"}} placeholder="Enter achievement notes" id="exampleFormControlTextarea1" name="achievnotes" value={formparams.fnotes} onChange={event => setFormparams({ftitle: formparams.ftitle, fnotes: event.target.value})}></textarea>
                </div>
            </div>
            <div className="form row">
                <div className="col">
                    <button type="submit" className="btn btn-primary w-100">Save</button>
                </div>
                <div className="col">
                    <button type="submit" className="btn btn-danger w-100">Cancel</button>
                </div>
            </div>
            <div className="alert alert-danger mt-4" role="alert">
                Achievement did not save!
            </div>
            <div className="alert alert-success mt-4" role="alert">
                Achievement saved success!
            </div>
        </form>
    )
}

export default SaveAchiev