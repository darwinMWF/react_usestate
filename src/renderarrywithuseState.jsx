import { useState } from "react";
import { data } from "./data";


export default function ArtistData  (){
    const [ index,setindex]  = useState(0);
    const [ show ,setshow] = useState(true);

    const handleIndex = ()=>{
        setindex(index+1);
        
    }

    const hanldeshowHide = ()=>{
        setshow(!show)
    }

    return <>
    <button onClick={handleIndex}>Next</button>
    <h1>{data[index].name} by {data[index].artist}</h1>
    <p>({index+1}of 12)</p>
    <button onClick={hanldeshowHide}>{show ? 'hide':'show'}</button>
    <br />
    {show && <p>{data[index].description}</p>}


    <img src={data[index].url} alt="imges" />
    

    </>
}

// task 
// 1 at 12 next remove 
// add restart 
// onclick restart 
// index = 1 pr aa jani chaiye

// export default ArtistData

