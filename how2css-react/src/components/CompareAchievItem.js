import React from 'react';

function CompareAchievItem({ achievItem }) {
    return(
        <tr>
                <td>{achievItem.trainingTestTitle}</td>
                <td>{achievItem.ownCompletedCount}</td>
                <td>{achievItem.ownCorrectCount}</td>
                <td>{achievItem.ownCurrentMark}</td>
                <td>{achievItem.antCompletedCount}</td>
                <td>{achievItem.antCorrectCount}</td>
                <td>{achievItem.antCurrentMark}</td>
        </tr>
    )
}

export default CompareAchievItem