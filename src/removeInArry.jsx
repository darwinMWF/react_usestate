import { useState } from "react";

let initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

const ExampleRemoveElementInArray = () => {
  const [value, setvalue] = useState("");
  const [newid, setid] = useState(3);
  const [arry, setarry] = useState(initialArtists);
  [];
  const newlist = arry.map((x) => (
    <li>
      {x.name}
      <button>delete</button>
    </li>
  ));

  return (
    <>
      <h1>add & remove</h1>
      <input
        value={value}
        onChange={(e) => {
          setvalue(e.target.value);
          setid(newid + 1);
        }}
      />
      <button
        onClick={() => {
          const newArry = [
            ...arry.slice(0, 2),
            { id: newid, name: value },
            ...arry.slice(2),
          ];
          {value!==''?setarry(newArry):alert("please enter something")};

          setvalue("");
        }}
      >
        add
      </button>

      <button onClick={()=>{
        const reverseArry = [...arry];
        reverseArry.reverse()
        setarry(reverseArry)
      }}>reverse</button>
      <ul>{newlist}</ul>
    </>
  );
};

export default ExampleRemoveElementInArray;
