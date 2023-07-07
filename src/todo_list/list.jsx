import { useState } from "react";
import "./list.css";

const List = ({ array, setarry, majorarry, setmajorarry }) => {

  const [editInputValue, seteditInputvalue] = useState("");

  const deleteHandler = (id) => {
    const newArrylist = majorarry.filter((data) => data.id !== id);
    setarry(newArrylist);
    setmajorarry(newArrylist);
  };

  const handleCheckbox = (id) => {
    const newArry = majorarry.map((data) => {
      if (data.id == id) {
        return { ...data, ischecked: !data.ischecked ? true : false };
      } else {
        return data;
      }
    });
    setmajorarry(newArry);
    setarry(newArry);
  };

  const edithandler = (id) => {
    const list = array.map((obj) => {
      if (obj.id == id) {
        if (obj.isedited) {
          return { ...obj, task: editInputValue, isedited: false };
        } else {
          return { ...obj, isedited: true };
        }
      } else {
        return obj;
      }
    });

    setarry(list);
    setmajorarry(majorarry);
  };

  const editvaluehandler = (e) => {
    seteditInputvalue(e.target.value);
  };


  const listdata = array.map((x) => (
    <li key={x.id}>
      {x.isedited && (
        <input
          type="text"
          id={x.id}
          onChange={editvaluehandler}
          defaultValue={x.task}
        />
      )}
      {!x.isedited && (
        <input
          type="checkbox"
          id={x.id}
          onChange={() => {
            handleCheckbox(x.id);
          }}
          defaultChecked={x.ischecked ? true : false}
        />
      )}
      {x.isedited ? "" : x.task}
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
