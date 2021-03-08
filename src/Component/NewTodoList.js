import React,{useState} from 'react'
import './TodoList.css'
import NewToDoListitem from './NewToDoListitem'
import {toast} from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
// toast.configure()  
  const NewTodoList=() =>{


    const [InputData, setInputData] = useState("");
    // const [tblsaveLoad, setTblSaveLoad] = useState(false);
    const [Items, setItems] = useState([]);
    const EnterProduct =(event)=>{
     
        setInputData(event.target.value);          
      
    };
   
    const AddProductName=()=>{
        const Id=new Date().getTime()
        setItems((oldItems) =>{
          
            return [...oldItems,{Id,InputData}];
            
        } );
        toast.success("Success Items Added !", {
            position: toast.POSITION.TOP_RIGHT
          });
    
        setInputData("");
        
    };
    const handleKeyPress = event => {
        if (event.key === "Enter") {
          AddProductName();
        }
      };
      
    // const formvalidation=()=>{
    //     var isValide=[]
    //     if(InputData == ''){
    //         isValide.push(false)
        
    //     }
    //     else{
    //         isValide.push(false)
    //         toast.success('successful', {autoClose:3000}) 
    //     }

    //     if(isValide.includes(false)===true){
    //         return false
    //       }else{
    //         return true
    //       }
    // }
    const EditItems=(Id,InputData)=>{
        console.log("updated");
       let index=Items.findIndex((item)=>item.Id==Id)
        let origstate=[...Items]
        origstate[index]={Id,InputData}
        setItems(origstate)
        // setItems((oldItems)=>{
        //     return oldItems.map((item,index)=>{
        //       if(id===index){
        //           item.text = text;
        //          }
        //     });
        // });
       
    }
    const deleteProducts=(id)=>{
        console.log("Deleted");
        // setItems((oldItems)=>{
        //     return oldItems.filter((arrElem)=>{
        //       return id!==arrElem.Id ;
        //     });
            
        // });
        let index=Items.findIndex((item)=>item.Id==id)
        let temstate=[...Items]
        temstate.splice(index,1)
        setItems(temstate)
        // setItems(Items.filter(item=>item.Id!==id));
        // let temstate=[...Items]
        // temstate.splice(index,1)
        // setItems(temstate)
    };
    
   const clearAll=()=>{
       
       setItems([])
       
   }
   
    
    return (
        <>
            {/* <div className="main_div"> */}
                <div className="center_div2">
            
                <h1 className="myh1">New Todo-List</h1>
              <br/>
              <input style={{width:'40%'}} type="text"  value={InputData} placeholder="Enter Product Name" onKeyPress={handleKeyPress} onChange={EnterProduct}/>
              <button className="Inputbtn" onClick={AddProductName}>Add</button>
              
          
                
                <ol className="olist">
                 { 
                    Items.map((item,index) => { 
                        return <NewToDoListitem key={index}
                        id={item.Id}
                        text={item.InputData}
                        onSelect={deleteProducts}
                        newItem={EditItems}
                        />
                    })
                    }
                </ol>
                {Items.length>0?<button className="clearbtn1"  onClick={clearAll}>Clear</button>:''}
                

                </div>
            {/* </div> */}
        </>
    )
}
export default NewTodoList;