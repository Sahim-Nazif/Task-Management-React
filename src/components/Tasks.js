import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Tasks = ({ task, onDelete }) => {
    return (
        <div className='task'>
            <h3 >{task.text}<FaTimes style={{color:'red', cursor:'pointer'}} onClick={()=>onDelete(task.id)}/> </h3>
            <p>When: {task.day}</p>
            <p>Reminder {task.reminder ? ' On' : 'Off'}</p>

        </div>
    )
}

export default Tasks
