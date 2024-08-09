// Custome Hooks
import {useEffect,useState} from 'react';
import axios from 'axios';




function TravelList(urlFromUser){
    
    const[destination,setdestination]=useState([]);
    const[loading,setloading]=useState(true);
    const[error,seterror]=useState(null)

    const fetchDestination=()=>{
        try {
            axios.get(urlFromUser).then((response)=>setdestination(response.data));
            setloading(false)
        } catch (error) {
            seterror(error);
           setloading(false)
            
        }
    };

    useEffect(()=>{
        fetchDestination();
    },[]);

    const deletedestination=(id)=>{
        setdestination(destination.filter((destinations)=>destinations.id!==id));
    }

    const refreshDestination=()=>{
        fetchDestination();
    }

    return { destination,loading,error,deletedestination,refreshDestination }
}
export default TravelList;

