import React from 'react';
import AnotherAchievItem from '../components/AnotherAchievItem'

function AnotherAchievsList() {
    const [simpleAchievData, setSimpleAchievData] = React.useState([])
    const [searchUserEmail, setSearchUserEmail] = React.useState('turyanmykh@gmail.com')
    const [isFounded, setIsFounded] = React.useState(true)
    const [titleMode, setTitleMode] = React.useState(false)
    const [comCountMode, setComCountMode] = React.useState(false)
    const [corCountMode, setCorCountMode] = React.useState(false)
    const [curMarkMode, setCurMarkMode] = React.useState(false)
    const [tryNumMode, setTryNumMode] = React.useState(false)
    const [saveDateMode, setSaveDateMode] = React.useState(false)
    const [tableMode, setTableMode] = React.useState(false)

    function handleClick(event) {
        console.log(searchUserEmail)
        fetch('https://localhost:5001/api/users/search/' + searchUserEmail)
            .then(data => {
                setIsFounded(Boolean(data));
                if(isFounded){
                    fetch('https://localhost:5001/api/achievdatas/simple/' + searchUserEmail)
                        .then(response => response.json())
                        .then(data => {
                            setSimpleAchievData(data)
                            setTableMode(true)
                            console.log(simpleAchievData[0])
                        })
                }
            })
    }

    function byTitleSort(){
        if(titleMode){
            simpleAchievData.sort((a,b) => (a.trainingTestTitle===undefined || b.trainingTestTitle===undefined) ? 0 : (a.trainingTestTitle > b.trainingTestTitle) ? 1 : (b.trainingTestTitle > a.trainingTestTitle) ? -1 : 0);
        }
        else{
            simpleAchievData.sort((a,b) => (a.trainingTestTitle===undefined || b.trainingTestTitle===undefined) ? 0 : (a.trainingTestTitle < b.trainingTestTitle) ? 1 : (b.trainingTestTitle < a.trainingTestTitle) ? -1 : 0);
        }
        setTitleMode(!titleMode);
      }

    function byComCountSort(){
        if(comCountMode){
            simpleAchievData.sort((a,b) => (a.completedCount===undefined || b.completedCount===undefined) ? 0 : (a.completedCount > b.completedCount) ? 1 : (b.completedCount > a.completedCount) ? -1 : 0);
        }
        else{
            simpleAchievData.sort((a,b) => (a.completedCount===undefined || b.completedCount===undefined) ? 0 : (a.completedCount < b.completedCount) ? 1 : (b.completedCount < a.completedCount) ? -1 : 0);
        }
        setComCountMode(!comCountMode);
      }
    
    function byCorCountSort(){
        if(corCountMode){
            simpleAchievData.sort((a,b) => (a.correctCount===undefined || b.correctCount===undefined) ? 0 : (a.correctCount > b.correctCount) ? 1 : (b.correctCount > a.correctCount) ? -1 : 0);
        }
        else{
            simpleAchievData.sort((a,b) => (a.correctCount===undefined || b.correctCount===undefined) ? 0 : (a.correctCount < b.correctCount) ? 1 : (b.correctCount < a.correctCount) ? -1 : 0);
        }
        setCorCountMode(!corCountMode);
      }
    
    function byCurMarkSort(){
        if(curMarkMode){
            simpleAchievData.sort((a,b) => (a.currentMark===undefined || b.currentMark===undefined) ? 0 : (a.currentMark > b.currentMark) ? 1 : (b.currentMark > a.currentMark) ? -1 : 0);
        }
        else{
            simpleAchievData.sort((a,b) => (a.currentMark===undefined || b.currentMark===undefined) ? 0 : (a.currentMark < b.currentMark) ? 1 : (b.currentMark < a.currentMark) ? -1 : 0);
        }
        setCurMarkMode(!curMarkMode);
      }
    
    function byTryNumSort(){
        if(tryNumMode){
            simpleAchievData.sort((a,b) => (a.tryCount===undefined || b.tryCount===undefined) ? 0 : (a.tryCount > b.tryCount) ? 1 : (b.tryCount > a.tryCount) ? -1 : 0);
        }
        else{
            simpleAchievData.sort((a,b) => (a.tryCount===undefined || b.tryCount===undefined) ? 0 : (a.tryCount < b.tryCount) ? 1 : (b.tryCount < a.tryCount) ? -1 : 0);
        }
        setTryNumMode(!tryNumMode);
      }
    
    function bySaveDateSort(){
        if(saveDateMode){
            simpleAchievData.sort((a,b) => (a.saveDate===undefined || b.saveDate===undefined) ? 0 : (a.saveDate > b.saveDate) ? 1 : (b.saveDate > a.saveDate) ? -1 : 0);
        }
        else{
            simpleAchievData.sort((a,b) => (a.saveDate===undefined || b.saveDate===undefined) ? 0 : (a.saveDate < b.saveDate) ? 1 : (b.saveDate < a.saveDate) ? -1 : 0);
        }
        setSaveDateMode(!saveDateMode);
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
                        <th>Test title<span style={{float: "right", cursor: "pointer"}} onClick={byTitleSort}><i className={`fas ${titleMode ? 'fa-caret-up' : 'fa-caret-down'} fa-2x`}></i></span></th>
                        <th>Completed/All<span style={{float: "right", cursor: "pointer"}} onClick={byComCountSort}><i className={`fas ${comCountMode ? 'fa-caret-up' : 'fa-caret-down'} fa-2x`}></i></span></th>
                        <th>Correct/All<span style={{float: "right", cursor: "pointer"}} onClick={byCorCountSort}><i className={`fas ${corCountMode ? 'fa-caret-up' : 'fa-caret-down'} fa-2x`}></i></span></th>
                        <th>Current mark<span style={{float: "right", cursor: "pointer"}} onClick={byCurMarkSort}><i className={`fas ${curMarkMode ? 'fa-caret-up' : 'fa-caret-down'} fa-2x`}></i></span></th>
                        <th>Try number<span style={{float: "right", cursor: "pointer"}} onClick={byTryNumSort}><i className={`fas ${tryNumMode ? 'fa-caret-up' : 'fa-caret-down'} fa-2x`}></i></span></th>
                        <th>Date<span style={{float: "right", cursor: "pointer"}} onClick={bySaveDateSort}><i className={`fas ${saveDateMode ? 'fa-caret-up' : 'fa-caret-down'} fa-2x`}></i></span></th>
                    </tr>
                </thead>
                <tbody>
                    {tableMode ? simpleAchievData.map((achiev, index) => {
                        return <AnotherAchievItem achievItem={achiev} key={index}></AnotherAchievItem>
                    }) : (<tr>
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

export default AnotherAchievsList