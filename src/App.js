
import './App.css';
import React from 'react';


const Calculadora = () => {

  const teclas = [{tecla: "one", value:"1"}, {tecla: "two", value:"2"}, {tecla: "three", value:"3"}, {tecla: "four", value:"4"}, {tecla: "five", value:"5"}, {tecla: "six", value:"6"}, {tecla: "seven", value:"7"}, {tecla: "eight", value:"8"}, {tecla: "nine", value:"9"}, {tecla: "zero", value:"0"
  }]

  
  const getValue = (e) => {
    // setState(e.target.value)
    setState(state.concat(e.target.value))
    // setState(state.concat(e.target.value))
    // setFormula(formula.concat(e.target.value)) 
  }
 
  
  const clear = (e) => {
    setState("")
    setFormula("")
  }
  
  const evaluar = (e) => {
     if (state.includes("..")) {
       state.replace("..", ".")
     }
      else {
        setState(eval(state))
      }
  }


  
  const [state, setState] = React.useState("")
  const [formula, setFormula] = React.useState("")
  
  
  return (
      <div>

        <div> {formula} </div>
         <input id = "display" value = {state}  />
      
      <div className = "teclas">{teclas.map((tecla) => 
          { return (<button onClick ={(e) =>getValue(e)} value = {tecla.value} id = {tecla.tecla}> {tecla.value}</button>)}
                      )} 
       
        <button id = "add" value = "+" onClick ={(e) =>getValue(e)}> + </button>
        <button id = "decimal" value = "." onClick ={(e) =>getValue(e)}> . </button>
        <button id ="subtract" value = "-" onClick ={(e) =>getValue(e)}> - </button>
        <button id ="multiply" value = "*" onClick ={(e) =>getValue(e)}> *</button>
        <button id ="divide" value = "/" onClick ={(e) =>getValue(e)}> / </button>
        <button id = "clear" onClick = {(e)=>clear(e)}> AC </button>
        <button id = "equals" onClick = {(e)=> evaluar(e)} > = </button>
       
        
      
      </div>
     
       
          
      </div>
  )
}
function App() {
  return (
    <div>
      <Calculadora/>
    </div>
  );
}

export default App;
