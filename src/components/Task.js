
import React from 'react'
import Tasks from './Tasks'
const Task = ({tasks}) => {

     return (
       <>
            {tasks.map((task)=>(
                <Tasks key={task.id} task={task}/>
             
             
                
               
            ))}
            
        </>
    )
}

export default Task
