import React, { useState } from 'react'


const App = () => {
  const [Task, setTask] = useState("");
  const [Desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([])

  const SubmitHandler = (e) => {
    e.preventDefault();

    setMainTask([...mainTask, {Task, Desc}]);

    setTask("");
    setDesc("");

  }

  const deleteHandler = (i) =>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }

  let renderTask = <span className="loader"></span>
  if(mainTask.length > 0){

  renderTask = mainTask.map((t,i)=>{
  return( 
    <li key={i} className="flex items-center justify-between mb-5">

      <div className=' w-2/3'>
          <h3 className='flex'>{t.Task}</h3>
           <p className='flex'>{t.Desc}</p>
      </div>
      <button onClick={() =>{
        deleteHandler(i)
      }} 
      className="bg-red-400 text-white px-5 py-2 rounded">Delete &nbsp; ❌</button>
</li>
    ) 
  })
}
 
  return (
    <div>
      <h1 className='text-red-500  text-5xl text-center p-5'>Todo list App By Jeeshan</h1>

      <form onSubmit={SubmitHandler} className='border-2 h-48 w-64 py-2 rounded mx-5 my-2'>


        <input onChange={(e) => setTask(e.target.value)} value={Task} className="flex px-5 py-2 mx-2 border-2 rounded border-slate-200 "  type="text" placeholder="Enter Your Task" />

        <input onChange={(e) => setDesc(e.target.value)} value={Desc} className='flex px-5 py-2 mx-2 my-2 border-2 rounded border-slate-200' type="text" placeholder="Enter Your Description" />

        <button className='mx-9 bg-teal-300 px-3 rounded text-white text-xl py-2'>Add Task</button>
      </form>
      <hr />
      <div className='p-5 bg-slate-200'>

    <ul>
      {renderTask}
    </ul>
      </div>
    </div>
  )
}

export default App