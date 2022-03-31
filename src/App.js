import "./App.css";
import {Routes, Route, } from "react-router-dom";
import {LandingRoute} from './routes/landingRoute'

function App() {
  return (
    <>  
      <Routes>
      <Route path="/" element={<LandingRoute/>}/>
      </Routes>
    </>
  );
}

export default App;
