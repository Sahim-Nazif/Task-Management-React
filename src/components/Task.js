
import React from 'react'

const tasks=[
    {
        id:1,
        text:'One Hour Exercise',
        day:'Jun 21 at 6:30 pm',
        reminder:false,
    },
    {
        id:2,
        text:'One Hour Bike Ride',
        day:'Jun 22 at 8:00 pm',
        reminder:true,
    },
    {
        id:3,
        text:'Push Latest Branch to Github',
        day:'Jun 24 at 1:30 pm',
        reminder:true,
    }
]
const Task = () => {
    return (
       <>
            {tasks.map((task)=>(
                <div>
             
                <h3>{task.id}{' '}{task.text} </h3>
                 <p>When: {task.day}</p>
                 <p>Reminder {task.reminder ? ' On' : 'Off'}</p>
               
                    </div>
               
            ))}
            
        </>
    )
}

export default Task
