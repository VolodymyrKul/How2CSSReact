import React, {useEffect} from 'react';
import OwnAchievItem from '../components/OwnAchievItem'

function OwnAchievsList() {
    const [detailAchievs, setDetailAchievs] = React.useState([])
    const [titleMode, setTitleMode] = React.useState(false)
    const [comCountMode, setComCountMode] = React.useState(false)
    const [corCountMode, setCorCountMode] = React.useState(false)
    const [curMarkMode, setCurMarkMode] = React.useState(false)
    const [tryNumMode, setTryNumMode] = React.useState(false)
    const [saveDateMode, setSaveDateMode] = React.useState(false)

    useEffect(()=>{
            fetch('https://localhost:5001/api/achievdatas/detail/' + localStorage.getItem("currentuser"))
            .then(response => response.json())
            .then(data => {
                setDetailAchievs(data)
                //console.log(data[0])
                //console.log(detailAchievs[0])
            })
    },[detailAchievs]);

    function byTitleSort(){
        if(titleMode){
          detailAchievs.sort((a,b) => (a.trainingTestTitle===undefined || b.trainingTestTitle===undefined) ? 0 : (a.trainingTestTitle > b.trainingTestTitle) ? 1 : (b.trainingTestTitle > a.trainingTestTitle) ? -1 : 0);
        }
        else{
          detailAchievs.sort((a,b) => (a.trainingTestTitle===undefined || b.trainingTestTitle===undefined) ? 0 : (a.trainingTestTitle < b.trainingTestTitle) ? 1 : (b.trainingTestTitle < a.trainingTestTitle) ? -1 : 0);
        }
        setTitleMode(!titleMode);
      }

    function byComCountSort(){
        if(comCountMode){
          detailAchievs.sort((a,b) => (a.completedCount===undefined || b.completedCount===undefined) ? 0 : (a.completedCount > b.completedCount) ? 1 : (b.completedCount > a.completedCount) ? -1 : 0);
        }
        else{
          detailAchievs.sort((a,b) => (a.completedCount===undefined || b.completedCount===undefined) ? 0 : (a.completedCount < b.completedCount) ? 1 : (b.completedCount < a.completedCount) ? -1 : 0);
        }
        setComCountMode(!comCountMode);
      }
    
    function byCorCountSort(){
        if(corCountMode){
          detailAchievs.sort((a,b) => (a.correctCount===undefined || b.correctCount===undefined) ? 0 : (a.correctCount > b.correctCount) ? 1 : (b.correctCount > a.correctCount) ? -1 : 0);
        }
        else{
          detailAchievs.sort((a,b) => (a.correctCount===undefined || b.correctCount===undefined) ? 0 : (a.correctCount < b.correctCount) ? 1 : (b.correctCount < a.correctCount) ? -1 : 0);
        }
        setCorCountMode(!corCountMode);
      }
    
    function byCurMarkSort(){
        if(curMarkMode){
          detailAchievs.sort((a,b) => (a.currentMark===undefined || b.currentMark===undefined) ? 0 : (a.currentMark > b.currentMark) ? 1 : (b.currentMark > a.currentMark) ? -1 : 0);
        }
        else{
          detailAchievs.sort((a,b) => (a.currentMark===undefined || b.currentMark===undefined) ? 0 : (a.currentMark < b.currentMark) ? 1 : (b.currentMark < a.currentMark) ? -1 : 0);
        }
        setCurMarkMode(!curMarkMode);
      }
    
    function byTryNumSort(){
        if(tryNumMode){
          detailAchievs.sort((a,b) => (a.tryCount===undefined || b.tryCount===undefined) ? 0 : (a.tryCount > b.tryCount) ? 1 : (b.tryCount > a.tryCount) ? -1 : 0);
        }
        else{
          detailAchievs.sort((a,b) => (a.tryCount===undefined || b.tryCount===undefined) ? 0 : (a.tryCount < b.tryCount) ? 1 : (b.tryCount < a.tryCount) ? -1 : 0);
        }
        setTryNumMode(!tryNumMode);
      }
    
    function bySaveDateSort(){
        if(saveDateMode){
          detailAchievs.sort((a,b) => (a.saveDate===undefined || b.saveDate===undefined) ? 0 : (a.saveDate > b.saveDate) ? 1 : (b.saveDate > a.saveDate) ? -1 : 0);
        }
        else{
          detailAchievs.sort((a,b) => (a.saveDate===undefined || b.saveDate===undefined) ? 0 : (a.saveDate < b.saveDate) ? 1 : (b.saveDate < a.saveDate) ? -1 : 0);
        }
        setSaveDateMode(!saveDateMode);
      }

    return(
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
                { detailAchievs.map((achiev, index) => {
                    return <OwnAchievItem achievItem={achiev} key={index}></OwnAchievItem>
                })}
            </tbody>
        </table>
    )
}

export default OwnAchievsList