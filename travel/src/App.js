
import './App.css';
import {Route,Routes} from 'react-router-dom'
// import TravelList from './components/Travellist';
import Usertravel from './components/Usertravel';


function App(){
    return (
        <>
        <Routes>
         {/* <Route path='/customHook' element={<TravelList/>}></Route> */}
         <Route path='/customHookUser' element={<Usertravel />}></Route>

         </Routes>
         
        </>

    )
}

export default App;

