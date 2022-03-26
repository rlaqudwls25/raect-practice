import { Outlet, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './App.css';

function App() {

  const navigate = useNavigate()

  return (
    <>
      <nav>
        <ul className="link-list">
          <li className="link-item"><Link to="ex1">ex1</Link></li>
          <li className="link-item"><Link to="ex2">ex2</Link></li>
          <li className="link-item"><Link to="ex3">ex3</Link></li>
          <li className="link-item"><Link to="ex4">ex4</Link></li>
          <li className="link-item"><Link to="ex5">ex5</Link></li>
          <li className="link-item"><Link to="ex6">ex6</Link></li>
          <li className="link-item"><Link to="ex7">ex7</Link></li>
          <li className="link-item"><Link to="ex8">ex8</Link></li>
          <li className="link-item"><Link to="ex9">ex9</Link></li>
          <li className="link-item"><Link to="ex-router">ex-router</Link></li>
          <li className="link-item"><Link to="lazy-ex-router">lazy-ex-router</Link></li>
          <li className="link-item"><Link to="todo">todo</Link></li>
        </ul>
      </nav>
      <Outlet></Outlet>
    </>
  );
}

export default App;
