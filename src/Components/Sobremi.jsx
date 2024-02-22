
function Sobremi() {
  return (
    <div className="container">
      <div id="carrusel01" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carrusel01" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#carrusel01" data-bs-slide-to="1" ></button>
          <button type="button" data-bs-target="#carrusel01" data-bs-slide-to="2" ></button>
          <button type="button" data-bs-target="#carrusel01" data-bs-slide-to="3" ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active"> 
          <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzN5N2o1eGZleXRuZWVoMjlhemN6MnNjdmc2d3B0NTh1ZGJlbzJuYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EMzzgNQ6Yk3MQLdwdW/giphy.gif" alt="" className="d-block w-100" />
          <div className="carousel-caption">
            <h3 className="text-body">Hola</h3>
          </div>
          </div>

          <div className="carousel-item">
            <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzN5N2o1eGZleXRuZWVoMjlhemN6MnNjdmc2d3B0NTh1ZGJlbzJuYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EMzzgNQ6Yk3MQLdwdW/giphy.gif" alt="" />
            <div className="carousel-caption">
              <h3> Yop</h3>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzN5N2o1eGZleXRuZWVoMjlhemN6MnNjdmc2d3B0NTh1ZGJlbzJuYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EMzzgNQ6Yk3MQLdwdW/giphy.gif" alt="" />
            <div className="carousel-caption">
              <h3> Hi</h3>
            </div>
          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carrusel01" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carrusel01" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>
    </div>
  )
}

export default Sobremi