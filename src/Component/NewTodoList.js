import React,{useState} from 'react'
import './TodoList.css'
import TodoListsItem from './TodoListsItem'
import {toast} from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
// toast.configure()  
  const NewTodolist=() =>{


    const [InputData, setInputData] = useState("");
    // const [tblsaveLoad, setTblSaveLoad] = useState(false);
    const [Items, setItems] = useState([{id:new Date().getTime,name:''}]);
    const EnterProduct =(event)=>{
     
        setInputData(event.target.value);          
      
    };
   
    const AddProductName=()=>{
      
        setItems((oldItems) =>{
          
            return [{...oldItems,name:InputData,id:Items.id}];
            
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
    const EditItems=(id,text)=>{
        console.log("updated");
       
        let origstate=[...Items]
        origstate[id]=text
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
        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
              return index !== id;
            });
            
        });
    };
    
   const clearAll=()=>{
       
       setItems([])
       
   }
   
    
    return (
        <>
            <div className="main_div">
                <div className="center_div">
            
                <h1 className="myh1">New Todo-List</h1>
              <br/>
              <input type="text"  value={InputData} placeholder="Enter Product Name" onKeyPress={handleKeyPress} onChange={EnterProduct}/>
              <button className="mybtn" onClick={AddProductName}>Add</button>
              
          
                
                <ol>
                 { 
                    Items.map( (item) => { 
                        return <TodoListsItem key={item.id}
                        id={item.id}
                        text={item.name}
                        onSelect={deleteProducts}
                        newItem={EditItems}
                        />
                    })
                    }
                </ol>
                {Items.length>0?<button className="clearbtn"  onClick={clearAll}>Clear</button>:''}
                

                </div>
            </div>
        </>
    )
}
export default NewTodolist;