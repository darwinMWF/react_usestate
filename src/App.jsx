import { useState } from "react";



const obj = {
  name : "mukesh",
  age:45

}

function App() {
  const [value ,setvalue] = useState(0);
  const [istrue,setbool]  = useState(true);
  const [object,setobject] = useState({
    name:"mukesh",
    age:45
  })

  const [arry ,setarry]  = useState(["mukesh","sursh","rajnikant"]);
  const [arryvalue,setarryvalue] = useState('');


//  const {name,age} = obj;

const handleClick = ()=>{
  if(value <= 8){
    console.log(value)
    setvalue((value)=>value+1);
    console.log("bad" + " "+value)
  }
 
}

const handleshowhide = ()=>{
  setbool(!istrue)
  console.log(istrue)
}

const handlechangeName = (e) =>{
  // console.log(e.target.value)
  setobject({
    ...object,
    name:e.target.value
  })
}

const handlechangeAge = (e) =>{
  // console.log(e.target.value)
  setobject({
    ...object,
    age:e.target.value
  })
}

const updatearry = (e)=>{
  setarryvalue(e.target.value);
}


const adddata = ()=>{
  setarry([...arry,arryvalue]);
  setarryvalue('');
}

const RenderArry = () =>{

  const list =  arry.map((x,index) => <li key={index}>{x}</li>)
  
  return <ul>{list}</ul>
}


  return <>
  <h1>{value}</h1>
  <input type="text" placeholder="enter your name" onChange={handlechangeName }/>
  <h4>{object.name}</h4>
  <br />
  <input type="text" placeholder="enter your age" onChange={handlechangeAge}/>
  <h4>{object.age}</h4>

  <button onClick={handleClick}>Add</button>
  <button onClick={handleshowhide}>{istrue?"hide":"show"}</button>
  {istrue && <p>this is true</p>}

  <input type="text" value={arryvalue} onChange={updatearry}  />
  <button onClick={adddata}>add</button>
  <RenderArry/>
  
  
  </>;
}

export default App;
