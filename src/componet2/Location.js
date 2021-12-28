import React,{useState} from "react";
const Location=()=>
{
    const[lat,setLat]=useState(null)
    const[err,setErr]=useState("")
    const[log,setLog]=useState(null)
    const locationConfg=()=>
    {
        render()
        if(err&&!lat)
        {
            console.log(err)
            return(<div>ero is {err}</div>)
        }
        if(!err&&lat)
        {   console.log(lat)
            return(<div>location is {lat}</div>)
        }
        return(<div>loction not fetched please turn on your location</div>)
    }
    const render=()=>{
    window.navigator.geolocation.getCurrentPosition(    
        (position)=>setLat(position.coords.latitude),
        (err)=> setErr(err.message ),
        (log)=>setLog(log.coords.long)
    )
}
    return(<>{locationConfg}</>)

}
export default Location