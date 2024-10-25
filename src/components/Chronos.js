import React, {useEffect, useState} from "react";
import './Chronos.css';

const Chronos=({question, handleNextPage}) =>  {
    const [chrono, setChrono]=useState(300000);
    useEffect(() => {
     const interval = setInterval(() => {
     setChrono((prevTime) => {
       if (prevTime<=1)
       { 
         handleNextPage();
         return 0;
       }      
          return prevTime - 1000;
       }
       );
     }, 1000);
     return () => clearInterval(interval);
     }, [question, handleNextPage]);
   
     const minutes = Math.floor(chrono / 60000);
     const seconds = ((chrono % 60000) / 1000).toFixed(0);
      
return (
<div className="chrono">
<p> Chrono : {minutes}:{seconds}</p> 
</div>
);
}
export default Chronos;