
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MisProyectos from "./Components/Proyectos"
import Sobremi from "./Components/Sobremi"
import Misconocimientos from './Components/Misconocimientos'
function App() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-info text-body">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">FullStack developer</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Mis Proyectos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/sobremi">Sobre mi</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/misconocimientos">Mis conocimientos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MisProyectos/>}></Route>
          <Route path="/sobremi" element={<Sobremi/>}></Route>
          <Route path="/misconocimientos" element={<Misconocimientos/>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
