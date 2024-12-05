import {useEffect, useState} from 'react';
function App(){
  const [running,setrunning] = useState(false);
  const [value,setvalue] = useState(0);
  const [minutes,setminutes]=useState(0);
  const [hour,sethour] = useState(0);
  useEffect(()=>{
    if(running){
      const id = setInterval(()=>{
        setminutes((minutes)=>minutes+1);
      },60000*12)
      return ()=>clearInterval(id);
    }
  },[running])
  useEffect(()=>{
    if(running){
      const id = setInterval(()=>{
        setminutes((minutes)=>minutes+1);
      },60000)
      return ()=>clearInterval(id);
    }
  },[running])
  useEffect(()=>{
    if(running){
      const id = setInterval(()=>{
        setvalue((value)=>value+1);
      },1000);
      return ()=>clearInterval(id);
    }
  },[running])
  return <>
    <h1>Stopwatch App</h1>
    {running && <h4>{hour%12}:{minutes%60}:{value%60}</h4>}
    {running==false && <button onClick={()=>{
      setrunning(true);
      
    }}>Start</button>}
    <button onClick={()=>{
      // setvalue(0);
      setvalue(0);
      setrunning(false);
    }}>Stop</button>
    <button onClick={()=>{
      setvalue(0);
      setminutes(0);
      sethour(0);
    }}>Reset</button>
  </>
}
export default App;