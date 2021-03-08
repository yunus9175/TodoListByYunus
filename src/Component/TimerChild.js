import React, { useState ,useEffect} from 'react'
function TimerChild(props) {
// const[newtime,setnewtime]= useState(props.time)
const [isActive, setActive] = useState(false)
const [time, settime] = useState(0)
useEffect(() => {
    let interval;
    if (isActive) {
        console.log("useeffect called")
        interval = setInterval(() => {


            settime((time)=>time + 1)
        }, 1000);
    }


    return () => clearInterval(interval)

}, [isActive]);

    return (
        <div className="taskdiv">
                            
                            <h1>{props.text}</h1>
                          
                            <button style={{ width: '90px', background: 'blue' }} onClick={()=>{setActive(!isActive)}}>{isActive?('Pause'):'Start'}</button>
                         
                             
                            <div>
                                <h3>Timer: {time}</h3>
                            </div>
                            <button style={{ width: '90px', background: 'blue' }} onClick={()=>props.onReset(props.id)}>Reset</button>
                            <button style={{ width: '90px', background: 'blue' }} onClick={()=>props.onSubmit(props.id,props.text,time,isActive)}>Update</button>
                            <button style={{ width: '90px', background: 'blue' }} onClick={()=>props.onDelte(props.index,props.id)}>Delete</button>

                        </div>
    )
}

export default TimerChild
