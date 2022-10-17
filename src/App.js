import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import Character from "./components/Character";

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index></Index>}></Route>
          <Route
            path='/character/:id'
            element={<Character></Character>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
