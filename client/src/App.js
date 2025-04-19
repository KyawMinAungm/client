import Navbar from "./components/Navbar";

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>

      <Route path="/home" exact Component={Home}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
