import React from 'react';
import CompareAchievItem from '../components/CompareAchievItem'

function CompareAchievsList(params) {
    const [compareAchievData, setCompareAchievData] = React.useState([])
    const [searchUserEmail, setSearchUserEmail] = React.useState('turyanmykh@gmail.com')
    const [isFounded, setIsFounded] = React.useState(true)
    const [titleMode, setTitleMode] = React.useState(false)
    const [ownComCountMode, setOwnComCountMode] = React.useState(false)
    const [ownCorCountMode, setOwnCorCountMode] = React.useState(false)
    const [ownCurMarkMode, setOwnCurMarkMode] = React.useState(false)
    const [antComCountMode, setAntComCountMode] = React.useState(false)
    const [antCorCountMode, setAntCorCountMode] = React.useState(false)
    const [antCurMarkMode, setAntCurMarkMode] = React.useState(false)
    const [tableMode, setTableMode] = React.useState(false)

    function handleClick(event) {
        console.log(searchUserEmail)
        fetch('https://localhost:5001/api/users/search/' + searchUserEmail)
            .then(data => {
                setIsFounded(Boolean(data));
                if(isFounded){
                    fetch('https://localhost:5001/api/achievdatas/compare/'+ localStorage.getItem("currentuser") + '/' + searchUserEmail)
                        .then(response => response.json())
                        .then(data => {
                            setCompareAchievData(data)
                            setTableMode(true)
                            console.log(compareAchievData[0])
                        })
                }
            })
    }

    function byTitleSort(){
        if(titleMode){
          compareAchievData.sort((a,b) => (a.trainingTestTitle===undefined || b.trainingTestTitle===undefined) ? 0 : (a.trainingTestTitle > b.trainingTestTitle) ? 1 : (b.trainingTestTitle > a.trainingTestTitle) ? -1 : 0);
        }
        else{
          compareAchievData.sort((a,b) => (a.trainingTestTitle===undefined || b.trainingTestTitle===undefined) ? 0 : (a.trainingTestTitle < b.trainingTestTitle) ? 1 : (b.trainingTestTitle < a.trainingTestTitle) ? -1 : 0);
        }
        setTitleMode(!titleMode);
      }
    
      function byOwnComCountSort(){
        if(ownComCountMode){
          compareAchievData.sort((a,b) => (a.ownCompletedCount===undefined || b.ownCompletedCount===undefined) ? 0 : (a.ownCompletedCount > b.ownCompletedCount) ? 1 : (b.ownCompletedCount > a.ownCompletedCount) ? -1 : 0);
        }
        else{
          compareAchievData.sort((a,b) => (a.ownCompletedCount===undefined || b.ownCompletedCount===undefined) ? 0 : (a.ownCompletedCount < b.ownCompletedCount) ? 1 : (b.ownCompletedCount < a.ownCompletedCount) ? -1 : 0);
        }
        setOwnComCountMode(!ownComCountMode);
      }
    
      function byOwnCorCountSort(){
        if(ownCorCountMode){
          compareAchievData.sort((a,b) => (a.ownCorrectCount===undefined || b.ownCorrectCount===undefined) ? 0 : (a.ownCorrectCount > b.ownCorrectCount) ? 1 : (b.ownCorrectCount > a.ownCorrectCount) ? -1 : 0);
        }
        else{
          compareAchievData.sort((a,b) => (a.ownCorrectCount===undefined || b.ownCorrectCount===undefined) ? 0 : (a.ownCorrectCount < b.ownCorrectCount) ? 1 : (b.ownCorrectCount < a.ownCorrectCount) ? -1 : 0);
        }
        setOwnCorCountMode(!ownCorCountMode);
      }
    
      function byOwnCurMarkSort(){
        if(ownCurMarkMode){
          compareAchievData.sort((a,b) => (a.ownCurrentMark===undefined || b.ownCurrentMark===undefined) ? 0 : (a.ownCurrentMark > b.ownCurrentMark) ? 1 : (b.ownCurrentMark > a.ownCurrentMark) ? -1 : 0);
        }
        else{
          compareAchievData.sort((a,b) => (a.ownCurrentMark===undefined || b.ownCurrentMark===undefined) ? 0 : (a.ownCurrentMark < b.ownCurrentMark) ? 1 : (b.ownCurrentMark < a.ownCurrentMark) ? -1 : 0);
        }
        setOwnCurMarkMode(!ownCurMarkMode);
      }
    
      function byAntComCountSort(){
        if(antComCountMode){
          compareAchievData.sort((a,b) => (a.antCompletedCount===undefined || b.antCompletedCount===undefined) ? 0 : (a.antCompletedCount > b.antCompletedCount) ? 1 : (b.antCompletedCount > a.antCompletedCount) ? -1 : 0);
        }
        else{
          compareAchievData.sort((a,b) => (a.antCompletedCount===undefined || b.antCompletedCount===undefined) ? 0 : (a.antCompletedCount < b.antCompletedCount) ? 1 : (b.antCompletedCount < a.antCompletedCount) ? -1 : 0);
        }
        setAntComCountMode(!antComCountMode);
      }
    
      function byAntCorCountSort(){
        if(antCorCountMode){
          compareAchievData.sort((a,b) => (a.antCorrectCount===undefined || b.antCorrectCount===undefined) ? 0 : (a.antCorrectCount > b.antCorrectCount) ? 1 : (b.antCorrectCount > a.antCorrectCount) ? -1 : 0);
        }
        else{
          compareAchievData.sort((a,b) => (a.antCorrectCount===undefined || b.antCorrectCount===undefined) ? 0 : (a.antCorrectCount < b.antCorrectCount) ? 1 : (b.antCorrectCount < a.antCorrectCount) ? -1 : 0);
        }
        setAntCorCountMode(!antCorCountMode);
      }
    
      function byAntCurMarkSort(){
        if(antCurMarkMode){
          compareAchievData.sort((a,b) => (a.antCurrentMark===undefined || b.antCurrentMark===undefined) ? 0 : (a.antCurrentMark > b.antCurrentMark) ? 1 : (b.antCurrentMark > a.antCurrentMark) ? -1 : 0);
        }
        else{
          compareAchievData.sort((a,b) => (a.antCurrentMark===undefined || b.antCurrentMark===undefined) ? 0 : (a.antCurrentMark < b.antCurrentMark) ? 1 : (b.antCurrentMark < a.antCurrentMark) ? -1 : 0);
        }
        setAntCurMarkMode(!antCurMarkMode);
      }

    return(
        <div>
            <form className="w-75 mx-auto mt-4 mb-4">
                <div className="form-group">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" name="useremail" value={searchUserEmail} onChange={event => setSearchUserEmail(event.target.value)}></input>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" onClick={handleClick}><i class="fas fa-search"></i></button>
                        </div>
                    </div>
                    {!isFounded && <div className="alert alert-danger" role="alert">
                        User did not find!
                    </div>}
                </div>
            </form>
            <table className="table table-striped table-bordered w-75 mx-auto mt-4">
                <thead>
                    <tr>
                        <th></th>
                        <th colSpan="3" style={{textAlign: "center"}}>My achievements</th>
                        <th colSpan="3" style={{textAlign: "center"}}>SearchUser achievements</th>
                    </tr>
                    <tr>
                        <th>Test title<span style={{float: "right", cursor: "pointer"}} onClick={byTitleSort}><i className={`fas ${titleMode ? 'fa-caret-up' : 'fa-caret-down'} fa-2x`}></i></span></th>
                        <th>Completed/All<span style={{float: "right", cursor: "pointer"}} onClick={byOwnComCountSort}><i className={`fas ${ownComCountMode ? 'fa-caret-up' : 'fa-caret-down'} fa-2x`}></i></span></th>
                        <th>Correct/All<span style={{float: "right", cursor: "pointer"}} onClick={byOwnCorCountSort}><i className={`fas ${ownCorCountMode ? 'fa-caret-up' : 'fa-caret-down'} fa-2x`}></i></span></th>
                        <th>Current mark<span style={{float: "right", cursor: "pointer"}} onClick={byOwnCurMarkSort}><i className={`fas ${ownCurMarkMode ? 'fa-caret-up' : 'fa-caret-down'} fa-2x`}></i></span></th>
                        <th>Completed/All<span style={{float: "right", cursor: "pointer"}} onClick={byAntComCountSort}><i className={`fas ${antComCountMode ? 'fa-caret-up' : 'fa-caret-down'} fa-2x`}></i></span></th>
                        <th>Correct/All<span style={{float: "right", cursor: "pointer"}} onClick={byAntCorCountSort}><i className={`fas ${antCorCountMode ? 'fa-caret-up' : 'fa-caret-down'} fa-2x`}></i></span></th>
                        <th>Current mark<span style={{float: "right", cursor: "pointer"}} onClick={byAntCurMarkSort}><i className={`fas ${antCurMarkMode ? 'fa-caret-up' : 'fa-caret-down'} fa-2x`}></i></span></th>
                    </tr>
                </thead>
                <tbody>
                    {tableMode ? compareAchievData.map((achiev, index) => {
                        return <CompareAchievItem achievItem={achiev} key={index}></CompareAchievItem>
                    }) : (<tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default CompareAchievsList