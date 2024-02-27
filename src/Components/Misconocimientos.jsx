import "./conocimientos.css";

function Misconocimientos() {
  return (
    <div>
      <main>
        <div className="bg-2">
        <h1 className="title-shadow" > Skills </h1>
        </div>
        <div className="lista-logos">
          <ul>
            <li>
              <img src="../logosSkills/html.png" alt="Logo JavaScript" />
            </li>
            <li>
              <img src="../logosSkills/css.png" alt="" />
            </li>
            <li>
              <img src="../logosSkills/javascript.png" alt="" />
            </li>
            <li>
              <img src="../logosSkills/reactjs.png" alt="" />
            </li>
            <li>
            <img src="../logosSkills/vite.png" alt="" />
          </li>
          </ul>
        </div>
        <div className="container">
        <h2 className="title-shadow" > Conocimientos </h2>
        </div>
        <div className="lista-logos">
          <ul>
          <li>
            <img src="../logosSkills/git.png" alt="" />
          </li>
          <li>
            <img src="../logosSkills/github.png" alt="" />
          </li>
          <li>
            <img src="./logosSkills/trello.png" alt="" />
          </li>
          <li>
            <img src="./logosSkills/nodejs.png" alt="" />
          </li>
          <li>
            <img src="./logosSkills/mongo.png" alt="" />
          </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Misconocimientos;
