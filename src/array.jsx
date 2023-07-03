import { useState } from "react";

const arryData = [0,0,0,0];

const Adder = ()=>{
    const [count,setcount] = useState(arryData);

// count = [0,0,0,0]
// new = [2,1,0,0]
// count = new

    return<>
   {count.map((x,index)=>(<li key={index}>
    {x}&nbsp;
    <button onClick={()=>{
        const  newcount = count.map((data,i)=>{if(i === index){
            return data + 1;
        }else{
            return data;
        }})
        setcount(newcount)
    }}>+1</button>
   </li>))}
    </>
}

export default Adder