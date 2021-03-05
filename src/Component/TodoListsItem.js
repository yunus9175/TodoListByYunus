import React,{useState} from 'react'

const TodoListsItem = (props)=> {
  const[show,setshow]=useState(true)
  const[val,setval]=useState(props.text)
  const handleSubmit=()=>{
        setshow(true)
        props.newItem(props.id,val)
  }
        return(
            <>
            
            <div className="todo_style">
            {/* <button className="mybtn1" onClick={()=>{
                props.onSelect(props.id);
            }}>Delete</button> */}
            
             
            {/* <button className="mybtn1" onClick={()=>{
                props.onDelet(props.id);
            }}>Delete All</button> */}
            
            
              <li >
          {    show==true?
              <div style={{display:'inline',margin:'3px'}} >
                   <button className="mybtn1" onClick={()=>{
                props.onSelect(props.id);
            }}>Delete</button>
                  <button className="mybtn2" style={{width:'40px',height:'40px',paddingLeft:'5px'}} onClick={()=>{setshow(false)}}>Edit</button>
         {props.id}) {val} </div>:
         <div style={{display:'inline',margin:'3px'}} >
        <input type="text" style={{width:'150px',height:'30px'}} 
        id={props.id} value={val} onChange={(e)=>{setval(e.target.value)}}/>
        <button style={{width:'60px',height:'40px',margin:'10px'}} onClick={handleSubmit}>ok</button>
        </div>
}
            {/* <input type="text" defaultValue={props.text} onChange={(e)=>{props.newItem(e.target.value,props.id)}}/> */}
           {/* <input type="text" id={props.id} value={props.text} onChange={(e)=>{setedit(e.target.value)}}/> */}
            
           
          </li> 

            </div>
            </>
        )  
    
}

export default TodoListsItem
