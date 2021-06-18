 import React from 'react'

const AddTask = () => {
    return (
        <form className='add-form'>

            <div className='form-control'>
               <label>Task</label>
               <input type='text' placeholder='Add Task'/>
            </div>
            <div className='form-control'>
               <label>Day & Time</label>
               <input type='text' placeholder='Day & Task'/>
            </div>
            <div className='form-control'>
               <label>Reminder</label>
               <input type='checkbox'/>
            </div>
            <input type='submit' value='Save'/>
        </form>
    )
}

export default AddTask
