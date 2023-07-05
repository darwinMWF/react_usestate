 
 import { useState } from "react"
import List from "./list"
 const arry = [
    {id:0,task:"reading",ischecked:false ,isedited:false},
    {id:1,task:"eting",ischecked:false,isedited:false},
    {id:2,task:"driving",ischecked:false,isedited:false},
    {id:3,task:"learning",ischecked:false,isedited:false},
    {id:4,task:"travelling",ischecked:false,isedited:false}
 ]


const Task = ()=>{
    const [inputValue,setInputValue] = useState('')
    const [taskArry,setTaskArry] = useState(arry)
    const [ newid,setnewid] =useState(5);

    const handleChange = (e)=>{
        // console.log(e)
        setInputValue(e.target.value);
        setnewid(newid+1);
    }

    const handleAdd = ()=>{
        setTaskArry([...taskArry,{id:newid,task:inputValue,ischecked:false,isedited:false}])
        setInputValue('')
    }
    return <>
    <input  value={inputValue} type="text" onChange={handleChange}/>
    <button onClick={handleAdd}>Add</button>
    <div>
        <button>All</button>
        <button>Completed</button>
        <button>Not Completed</button>
    </div>
    <List array = {taskArry} setarry = {setTaskArry}/>

    </>
}

export default Task