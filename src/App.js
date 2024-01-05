import {  Routes, Route, BrowserRouter} from "react-router-dom";
import Dashb from "./Dashb";
import Login from "./Login";

function App() {

 
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/dashb"
      element={<Dashb/>}

      />
      <Route path="/" element={<Login/>}/>
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
