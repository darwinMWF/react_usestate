import { useState } from "react";
import "./list.css";

const List = ({ array, setarry }) => {

const [editinput,seteditInput] = useState('');

  const deleteHandler = (id) => {
    const newArrylist = array.filter((data) => data.id !== id);
    setarry(newArrylist);
  };

  const edithandler = (id) => {
    const list = array.map((obj) => {
      if (obj.id == id) {
        return { ...obj, isedited:!obj.isedited };
      } else {
        return obj;
      }
    });

    setarry(list);
  };

  console.log(array);
  const listdata = array.map((x) => (
    <li key={x.id}>
      <input type={x.isedited?"text":"checkbox"} defaultValue={x.isedited?x.task:''} />
      {x.isedited?'':x.task}
      <button
        onClick={() => {
          edithandler(x.id);
        }}
      >
        edit
      </button>
      <button
        onClick={() => {
          deleteHandler(x.id);
        }}
      >
        delete
      </button>
    </li>
  ));
  return <ul>{listdata}</ul>;
};

export default List;
