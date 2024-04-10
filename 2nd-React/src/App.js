import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';


//pages
import CounterJW from "./pages/counterJW"
import ModalJW from "./pages/modalJW"
import ToDo from "./pages/todo"

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/counterjwjsx" element={<CounterJW />} />
          <Route path="/modaljwjsx" element={<ModalJW/>} />
          <Route path="/todojsx" element={<ToDo/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
