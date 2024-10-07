import { useEffect } from "react";
import { useState } from "react";

let CurrentTime = ()=> {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("Interval has been setup");
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
      console.log("Cancelled the Interval");
    };
  }, []); 

  return <p className="lead">This is the current time: {time.toLocaleDateString()} - {""} {time.toLocaleTimeString()} </p>; 
 
} 

  export default CurrentTime;