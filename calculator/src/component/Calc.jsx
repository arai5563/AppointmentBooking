import React, {useState } from 'react';
import "./Calc.css";


const Calc = () => {

   const [valA,setValA] = useState(0);
   const [valB,setValB] = useState(0);
   const[operation,setOperation] = useState("+");
   const[output,setOutput] = useState(0);

   const handleSubmit = () => {
         
    if(operation == "+"){
        setOutput(parseInt(valA)+parseInt(valB));
    }
    if (operation == "-"){
        setOutput(valA-valB);
    }
    if (operation == "*"){
        setOutput(valA*valB);
    }
    if (operation == "/"){
        setOutput(valA/valB);
    }
        
   }

  return (
   <>
   
   <div className='calc-main'>
         
         <div>
             <h3>Output is {output}</h3>
             <input type="number" value={valA} onChange = {(e)=> {setValA(e.target.value)}}/> <br />
             <input type="number" value={valB} onChange = {(e)=> {setValB(e.target.value)}}/>  <br />
             <button onClick={handleSubmit}>Submit</button>
         </div>
       <div className='calc-num'>
              
             <div ><button >=</button></div>
             <div><button onClick={()=>{setOperation("+")}}>+</button></div>
             <div><button onClick={()=>{setOperation("-")}}>-</button></div>
             <div><button onClick={()=>{setOperation("*")}}>*</button></div>
             <div><button onClick={()=>{setOperation("/")}}>/</button></div>
       </div>
   </div>
   
   
   
   </>
  )
}

export default Calc
