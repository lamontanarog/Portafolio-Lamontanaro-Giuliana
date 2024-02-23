import "./proyectos.css";

function Sobremi() {
  return (
    <>
    
    <div id="contenedor-sobre-mi" className="container mt-5">
      <div id="carrusel01" className="carousel slide" data-bs-ride="carousel" >
        
        <div className="carousel-inner text-center">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="/img/fotocv.jpg"
              alt="..."
              style={{borderRadius:'5px'}}/>
            <div className="bg-text-carusel mt-2">
              <h1>Quien soy?</h1>
              <h5>
                Mi nombre es Giuliana Lamontanaro, tengo 23 años y cuento con
                una sólida orientación hacia el desarrollo web desde hace casi 4
                años. <strong>Actualmente, me encuentro culminando el último tramo de mi
                carrera universitaria en programación en la UTN-FRT. </strong>
              </h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/img/certificadoDW.png"
              alt="..."
              style={{borderRadius:'5px'}}/>
            <div className="bg-text-carusel mt-2">
              <h1>Desarrollo Web</h1>
              <h5>
                Cuento con amplios conocimientos en el desarrollo web, abarcando
                áreas como el maquetado con HTML5, CSS3 y JavaScript. Además,
                poseo experiencia en el uso de herramientas como Bootstrap y
                Sass para la creación de interfaces web modernas y responsivas.
              </h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/img/certificadoJs.png"
              alt="..."
              style={{borderRadius:'5px'}}/>
            <div className="bg-text-carusel mt-2">
              <h1>JavaScript</h1>
              <h5>
                También poseo un sólido entendimiento de los fundamentos de la
                programación con JavaScript, así como de sus principios básicos.
                Además, tengo experiencia en el uso de Git para el control de
                versiones del código, lo que me permite colaborar de manera
                efectiva en proyectos y mantener un flujo de trabajo organizado
                y estructurado.
              </h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/img/certificadoReact.png"
              alt="..."
              style={{borderRadius:'5px'}}/>
            <div className="bg-text-carusel mt-2">
              <h1>React Js</h1>
              <h5>
                He obtenido certificación en ReactJS, lo que me ha permitido
                familiarizarme con sus bibliotecas y hooks, los cuales optimizan
                el proceso de creación de aplicaciones web mediante la
                modularización de componentes. Además, poseo experiencia en la
                gestión de rutas dentro de la aplicación, aplicando el concepto
                de Single Page Application (SPA).
              </h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/img/certificadoCarrerafs.png"
              alt="..."
              style={{borderRadius:'5px'}}/>
            <div className="bg-text-carusel mt-2">
              <h1>Node Js, Express, MongoDB</h1>
              <h5>
                A pesar de haberme especializado como Desarrollador FrontEnd, en
                la actualidad estoy ampliando mis habilidades para convertirme
                en un Desarrollador FullStack, adquiriendo conocimientos en
                tecnologías como Node.js con Express y MongoDB.
              </h5>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Botones izquierda y derecha --> */}
<button className="carousel-control-prev" type="button" data-bs-target="#carrusel01" data-bs-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carrusel01" data-bs-slide="next">
  <span className="carousel-control-next-icon"></span>
</button>
    </div>
    
              </>
  );
}

export default Sobremi;
