import { useState } from "react";

let initialShapes = [
    { id: 0, type: 'circle', x: 50, y: 100 },
    { id: 1, type: 'square', x: 150, y: 100 },
    { id: 2, type: 'circle', x: 250, y: 100 },
  ];

const MoveElement = ()=>{
    const [shapesPosition,setshapesPosition] = useState(initialShapes)

    const handleMoveChange = (e)=>{
       if(e.target.id === '1'){
        const newArryChangePosition = shapesPosition.map((shape)=>{
            if(shape.type === 'circle'){
                return {...shape,y:shape.y+50}
            }else{
                return shape
            }

        
        })
        setshapesPosition(newArryChangePosition)
       }else{
        const newArryChangePosition = shapesPosition.map((shape)=>{
            if(shape.type === 'circle'){
                return {...shape,y:shape.y-50}
            }else{
                return shape
            }

        
        })
        setshapesPosition(newArryChangePosition)
       }
        
        

    }

    
    return <>
    <button id="1" onClick={handleMoveChange}>move circle down</button>
    <button id="2" onClick={handleMoveChange}>move circle up</button>
    {
    shapesPosition.map((data)=>(
        <div style={{height:"50px",width:"50px",background:"yellow",borderRadius:data.type==='circle'?"50%":'',position:"absolute",top:data.y,left:data.x}}></div>
    ))
    }
    </>

}

export default MoveElement