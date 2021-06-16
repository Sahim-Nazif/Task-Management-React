import React, {useState} from 'react'
import Header from './components/Header'
import Task from './components/Task'


const App=()=> {
  const [tasks, setTasks]=useState([ {
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
    reminder:true
}
])

  return (
    <div className="container">
      <Header/>
      <Task tasks={tasks}/>
    </div>
  );
}

export default App;
