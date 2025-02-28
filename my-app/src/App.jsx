import './App.css'
import { useState , useEffect } from 'react';
import Hero from "./components/Hero.jsx";

function  App(){
  const [stop , setstop] = useState([]);
   useEffect(function(){
     const url = `https://jsonplaceholder.typicode.com/posts`
      fetch(url).then(resc => resc.json())
      .then(resc => setstop(resc))
   }, [])
   console.log(stop)
   
  return(
    <>
       <Hero/>
       {
        stop.map(item =>{
           return(
              <div key={item.id}>
                  <p className='text-[18px] font-[Gotu] p-2'>{item.userId}</p>
                  <p className='text-[18px] font-[Gotu] p-2'>{item.title}</p>
                  <p className='text-[18px] font-[Gotu] p-2'>{item.body}</p>
              </div>
           )
        })
       }
    </>
  )
} 

export default App



