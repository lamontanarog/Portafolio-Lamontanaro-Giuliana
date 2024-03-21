
function MainPage() {
  return (
    <>
      <div id="contenedor-sobre-mi" className="container mt-5 ">
        <div id="carrusel01" className="carousel slide" data-bs-ride="carousel" >
          <div className="carousel-inner text-center">
            <div className="carousel-item active">
              <img id="img"
                src="/img/certificadoDW.png"
                alt="..."
                style={{ borderRadius: '5px' }} />
            </div>
            <div className="carousel-item">
              <img
                id="img"
                src="/img/certificadoJs.png"
                alt="..."
                style={{ borderRadius: '5px' }} />
            </div>
            <div className="carousel-item">
              <img
                id="img"
                src="/img/certificadoReact.png"
                alt="..."
                style={{ borderRadius: '5px' }} />
            </div>
            <div className="carousel-item">
              <img
                id="img"
                src="/img/certificadoCarrerafs.png"
                alt="..."
                style={{ borderRadius: '5px' }} />
            </div>
            <div className="carousel-item">
              <img
                id="img"
                src="/img/certificadoscrum.png"
                alt="..."
                style={{ borderRadius: '5px' }} />
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
      </div>

    </>
  );
}

export default MainPage;
