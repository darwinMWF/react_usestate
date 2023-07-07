import { useState } from "react";
import List from "./list";
const arry = [
  { id: 0, task: "reading", ischecked: false, isedited: false },
  { id: 1, task: "eting", ischecked: false, isedited: false },
  { id: 2, task: "driving", ischecked: false, isedited: false },
  { id: 3, task: "learning", ischecked: false, isedited: false },
  { id: 4, task: "travelling", ischecked: false, isedited: false },
];

const Task = () => {
  const [inputValue, setInputValue] = useState("");
  const [taskArry, setTaskArry] = useState(arry);
  const [taskmajorArray, settaskchangeArray] = useState(arry);
  const [newid, setnewid] = useState(5);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setnewid(newid + 1);
  };

  const handleAdd = () => {
    setTaskArry([
      ...taskArry,
      { id: newid, task: inputValue, ischecked: false, isedited: false },
    ]);
    settaskchangeArray([
      ...taskmajorArray,
      { id: newid, task: inputValue, ischecked: false, isedited: false },
    ]);
    setInputValue("");
  };

  const alltaskhandler = () => {
    setTaskArry(taskmajorArray);
  };

  const completehandler = () => {
    const list = taskmajorArray.filter((x) => x.ischecked);
    console.log(list);
    setTaskArry(list);
  };

  const Notcompletehandler = () => {
    const list = taskmajorArray.filter((x) => x.ischecked === false);
    setTaskArry(list);
  };
  return (
    <>
      <input value={inputValue} type="text" onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>
      <div>
        <button onClick={alltaskhandler}>All</button>
        <button onClick={completehandler}>Completed</button>
        <button onClick={Notcompletehandler}>Not Completed</button>
      </div>
      <List
        array={taskArry}
        setarry={setTaskArry}
        majorarry={taskmajorArray}
        setmajorarry={settaskchangeArray}
      />
    </>
  );
};

export default Task;
