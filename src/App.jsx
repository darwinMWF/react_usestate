
// import { data } from "./data";


// import { useState } from "react";
// import './todolist.css'

// import ArtistData from "./renderarrywithuseState";
// import Adder from "./array";
import MoveElement from "./moveElement";
import ExampleRemoveElementInArray from "./removeInArry"; 
// const arry = ["mahesh", "yogesh", "mannat", "mukesh"];

// const name = "mukesh";

function App() {
  // const [listarry, setarry] = useState(arry);
  // const [value, setValue] = useState("");

  // function handelchange(e) {
  //   setValue(e.target.value);
  // }

  // function handlerclick() {
  //   const newarry = [...listarry, value];
  //   setarry(newarry);
  // }

  // const brry = listarry.map(function (x, i) {
  //   return(<><li key={i}>{x}</li>
  //   <button>delete</button> <br /></>) 
  // });

  // <input
  //       onChange={handelchange}
  //       type="text"
  //       placeholder="enter something...
  // "
  //     />
  //     <button onClick={handlerclick}>add</button>
  //     <ul>{brry}</ul>
  //     {/* {value} */}

  return (
    <>
      <ExampleRemoveElementInArray/>
      {/* <Adder/> */}
      {/* <MoveElement/> */}
    </>
  );
}

export default App;

// const [count ,setcount] = useState(0);
// const [value, setvalue] = useState(0);
// const [istrue, setbool] = useState(true);
// const [object, setobject] = useState({
//   name: "mukesh",
//   age: 45,
// });

// const [arry, setarry] = useState(["mukesh", "sursh", "rajnikant"]);
// const [arryvalue, setarryvalue] = useState("");

// const handleClick = () => {
//   if (value <= 8) {
//     console.log(value);
//     setvalue((value) => value + 1);
//     console.log("bad" + " " + value);
//   }
// };

// const handleshowhide = () => {
//   setbool(!istrue);
//   console.log(istrue);
// };

// const handlechangeName = (e) => {
//   setobject({
//     ...object,
//     name: e.target.value,
//   });
// };

// const handlechangeAge = (e) => {
//   setobject({
//     ...object,
//     age: e.target.value,
//   });
// };

// const updatearry = (e) => {
//   setarryvalue(e.target.value);
// };

// const adddata = () => {
//   setarry([...arry, arryvalue]);
//   setarryvalue("");
// };

// const RenderArry = () => {
//   const list = arry.map((x, index) => <li key={index}>{x}</li>);

//   return <ul>{list}</ul>;
// };

// const handlePlus = ()=>{
//   console.log(data.length)
//   setcount((count)=>count+1);
// }

{
  /* {count}
      <br />
      <button onClick={()=>{
        handlePlus()
        handlePlus()
        handlePlus()
        handlePlus()
      }}>+4</button>
      <button onClick={()=>{
        handlePlus()
        handlePlus()
        handlePlus()
      }}>+3</button> */
}
{
  /* <h1>{value}</h1>
      <input
        type="text"
        placeholder="enter your name"
        onChange={handlechangeName}
      />
      <h4>{object.name}</h4>
      <br />
      <input
        type="text"
        placeholder="enter your age"
        onChange={handlechangeAge}
      />
      <h4>{object.age}</h4>

      <button onClick={handleClick}>Add</button>
      <button onClick={handleshowhide}>{istrue ? "hide" : "show"}</button>
      {istrue && <p>this is true</p>}

      
      <RenderArry /> */
}
{
  /* <ArtistData/> */
}
