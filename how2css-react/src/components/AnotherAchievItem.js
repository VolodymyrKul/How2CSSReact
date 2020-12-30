import React from 'react';

function AnotherAchievItem({ achievItem }) {
    return(
        <tr>
                <td>{achievItem.trainingTestTitle}</td>
                <td>{achievItem.completedCount}</td>
                <td>{achievItem.correctCount}</td>
                <td>{achievItem.currentMark}</td>
                <td>{achievItem.tryCount}</td>
                <td>{achievItem.saveDate}</td>
        </tr>
    )
}

export default AnotherAchievItem