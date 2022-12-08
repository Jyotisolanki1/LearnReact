import React,{useState,useEffect} from "react";
import DisplayComponent from "./displayComponent"

const url ="https://zomatoapi.onrender.com/location"
function HooksComponent(){
    //define state variable
    const [title] = useState('Hooks react app');
    //here count is count is a state varible and setState in functional variable
    const [count,setCount] = useState(0);
    const [count1,setCount1] = useState(0);
    const [city,setCity] = useState();

    const updateCount  = () => {
        setCount(count+1)
    }
    useEffect(()=>{
        fetch(url,{
            method:"GET"
        })
        .then((res)=>res.json())
        .then((data)=>{
            setCity(data)
        })
    },[])
return(
   <>
    <h1>{title}</h1>
    <h2>{count}</h2>
    <button onClick={updateCount}>Counter</button>
    <h2>{count1}</h2>
    <button onClick={()=>setCount1(count1+1)}>counter</button>
    <DisplayComponent myCity={city}/>
   </>
)
}
export default HooksComponent;