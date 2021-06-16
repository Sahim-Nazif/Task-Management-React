import React from 'react'



const Tasks = ({task}) => {
    return (
        <div className='task'>
            <h3 >{task.id}{' '}{task.text} </h3>
                 <p>When: {task.day}</p>
                 <p>Reminder {task.reminder ? ' On' : 'Off'}</p>
             
        </div>
    )
}

export default Tasks
