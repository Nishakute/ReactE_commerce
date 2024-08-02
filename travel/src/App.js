import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import TravelList from './components/Travellist';

function App(){
    return (
        <>
        <Routes>
         <Route path='/customHook' element={<TravelList />}></Route>
         <Route path='/customHookUser' element={<usertravel />}></Route>
         </Routes>
        </>

    )
}

export default App;

