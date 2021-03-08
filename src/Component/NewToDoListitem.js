import React,{useState} from 'react'
const NewToDoListitem = (props)=> {
  const[show,setshow]=useState(true)
  const[val,setval]=useState(props.text)
  const updateHandle=event=>{
      if(event.key=='Enter'){
          handleSubmit();
      }
  }
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

                   <button className="mybtn1" onClick={()=>{props.onSelect(props.id)}}>Delete</button>

                  <button className="mybtn2" style={{width:'40px',height:'40px',paddingLeft:'5px'}} onClick={()=>{setshow(false)}}>
                      Edit

                      </button>

        Id:{props.id} Name:{props.text} </div>:


         <div style={{display:'inline',margin:'3px'}} >

        <input type="text" style={{width:'300px',height:'40px', font:'italic',fontSize:'20px'}} id={props.id} value={props.text} onKeyPress={updateHandle} onChange={(e)=>{setval(e.target.value)}}/>

        <button className="updatebtn" style={{width:'80px',height:'44px',margin:'11px'}} onClick={handleSubmit}>Update</button>

        </div>

}
            {/* <input type="text" defaultValue={props.text} onChange={(e)=>{props.newItem(e.target.value,props.id)}}/> */}
           {/* <input type="text" id={props.id} value={props.text} onChange={(e)=>{setedit(e.target.value)}}/> */}
            
           
          </li> 

            </div>
            </>
        )  
    
}

export default NewToDoListitem
