import React from 'react';

function OwnAchievItem({ achievItem }) {
    const [isDetailed, setIsDetailed] = React.useState(false)

    function changeOption(event){
        setIsDetailed(!isDetailed)
    }
    return(
        <React.Fragment>
            <tr>
                <td>{achievItem.trainingTestTitle}</td>
                <td>{achievItem.completedCount}</td>
                <td>{achievItem.correctCount}</td>
                <td>{achievItem.currentMark}</td>
                <td>{achievItem.tryCount}</td>
                <td>{achievItem.saveDate}<span style={{float: "right", cursor: "pointer"}} onClick={changeOption}><i className={`fas ${isDetailed ? 'fa-caret-up' : 'fa-caret-down'} fa-2x`}></i></span></td>
            </tr>
            {isDetailed && <tr>
                <td colSpan="2">{achievItem.achievTitle}</td>
                <td colSpan="4">{achievItem.achievNotes}</td>
            </tr>}
        </React.Fragment>
    )
}

export default OwnAchievItem