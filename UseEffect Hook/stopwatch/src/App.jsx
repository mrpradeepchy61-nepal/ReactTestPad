import { useEffect, useState } from "react"


function App(){
  const [timer, setTimer] = useState(0)
  const [running, setRunning] = useState(false);
  const [data, setData] = useState([]);


  useEffect(()=>{
    let interval;
    if(running){
      interval = setInterval(()=>{
        setTimer(pre=>pre+1)
      },1000)
    }
    return ()=> clearInterval(interval)
  },[running]);

    // Convert seconds into HH:MM:SS
  const timeFormat = (totalSeconds)=>{
    const hours = Math.floor(totalSeconds/3600);
    const minutes = Math.floor((totalSeconds%3600)/60);
    const seconds = totalSeconds%60;

    return `${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`
  }

function start(){
  setRunning(true);
}

function stop(){
  setRunning(false);
}

function reset(){
  setTimer(0);
  setData([]);
}

function lap(){
  setData([...data, timeFormat(timer)]);
}

  return(<>
    <div>
      <h1>STOPWATCH</h1>
      <h1>{timer}</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
      <button onClick={lap}>Lap</button>
    </div>

    <div>
      <h3>Time Laps:</h3>

      {
        (data.length == 0) ? <h3>No Data</h3> :(
        data.map((val, index)=>(
          <h3 key={index}>Lap {index+1}: {val}</h3>
        )))
      }
    </div>
  </>)
}
export default App