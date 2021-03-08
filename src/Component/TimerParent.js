import React, { useEffect, useState } from 'react'
import TimerChild from './TimerChild';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import './Timer.css'
function TimerParent() {
    const [Tasktext, setTasktext] = useState('')
    // const initial = 0;
    const [isActive, setActive] = useState(false)
    const [task, settask] = useState([])
    const [time, settime] = useState(0)

    
    const handleChange = event => {
        let a = event.target.value
        setTasktext(a)
    }
    const handlePress = event => {
        if (event.key === 'Enter') {
            handleTask();
        }
    }
    const handleTask = () => {
        // settime(0)
        const Id = new Date().getTime();
        settask((olditem) => {
            return [...olditem, {Id,Tasktext,time,isActive }];
        })
        toast.success("Successful Task Added !", {
            position: toast.POSITION.TOP_RIGHT
        });
        // settime(0)

        setTasktext("");
    }
    const DelteAll = () => {
        settask([]);
        settime(0)
        toast.success("All task Data Has been Deleted   ", {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    const deleteTask = (index) => {
        const deltTastState = [...task];
        deltTastState.splice(index, 1)
        settask(deltTastState)
    }
    // const TimeStart = (Id,Tasktext,time,isActive) => {
        
    //    let index=task.findIndex((item)=>item.Id==Id)
    
    //         setActive(true)
    //         let copyStart = [...task];
    //         copyStart[index] = {Id,Tasktext,time,isActive }
    //         settask(copyStart)

        

    // }
    // const TimePause = (Id,time) => {
    // //    let index=task.findIndex((item)=>item.Id==id)

    //     setActive(false)
    //     // setActive(prevstate=>prevstate=false)
      
    //         // setActive(true)
    //     // let copyPause = [...task];

    //     //     copyPause[index] = { time }
    //     //     settask(copyPause)
            

    // }
    const resetTime=(id)=>
    {
       let index=task.findIndex((item)=>item.Id==id)
        const copyRestart = [...task];
        copyRestart[index] = settime(0)
        setActive(false)


    }
const updateTime=(Id,Tasktext,time,isActive)=>
{
    let index=task.findIndex((item)=>item.Id==Id)
    const copyUpdate = [...task];
    copyUpdate[index] = {Id,Tasktext,time,isActive}
    settask(copyUpdate)
}

    return (
        <>
            <input className="taskinput" value={Tasktext} onKeyPress={handlePress} onChange={handleChange} placeholder="Enter Your Taks Here..." /><br />
            <button className="taskbtn" onClick={handleTask}>Add Task</button>
            {task.length > 0 ? <button className="taskbtn" onClick={DelteAll}>All Clear</button> : ''}
            {/* {time} */}


            {
                task.map((item, index) => {
                    return (<TimerChild key={index}
                        id={item.Id}
                        index={index}
                        text={item.Tasktext}
                        time={item.time}
                        // onStart={TimeStart}
                        // onPause={TimePause}
                        onSubmit={updateTime}
                        onReset={resetTime}
                        onDelte={deleteTask}
                        
                        isActive={item.isActive}
                        
                    />
                        // return (
                        // <div className="taskdiv" key={index}>

                        //     <h1>{item.Tasktext}</h1>
                        //     <button style={{ width: '90px', background: 'blue' }} onClick={()=>setActive(true)}>Start</button>
                        //     <div>
                        //         <h3>Timer: {time}</h3>
                        //     </div>
                        //     <button style={{ width: '90px', background: 'blue' }} onClick={()=>setActive(false)}>Pause</button>
                        //     <button style={{ width: '90px', background: 'blue' }} onClick={()=>
                        //         {
                        //             settime(0);
                        //             setActive(false);
                        //         }}>Reset</button>
                        //     <button style={{ width: '90px', background: 'blue' }} onClick={()=>UpdateTime(item.Id)}>Update</button>

                        // </div>
                        // )


                    )



                })

            }


        </>
    )
}
export default TimerParent
