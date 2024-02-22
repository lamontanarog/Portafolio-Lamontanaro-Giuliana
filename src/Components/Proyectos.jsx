import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Swal from "sweetalert2";
import './proyectos.css'
function MisProyectos() {
  return (
    <>
      <div className="container mt-5">
        <div className="row ">
          <div className="col-md-4">
            <Card className="text-center" style={{ width: "19rem" }}>
              <Card.Img variant="top" src="../icons/iconoControlDegastos.jpg" />
              <Card.Body>
                <Card.Title>Control de gastos</Card.Title>
                <Card.Text>
                  Proyecto realizado con Reactjs, css, boostrap, firebase
                </Card.Text>
                <Button className="mx-4"
                  onClick={() => {
                    Swal.fire({
                      title:
                        "Proyecto para llevar un control de gastos, con ingresos, egresos y balance general. Fue realizada con Reactjs{Utilizando hooks, context y librerias} ademas de firebase para llevar el control de los usuarios.",
                      width: 700,
                      padding: "4em",
                      color: "#fff",
                      background: "#aecb9d ",
                      backdrop: `
                      rgba(0,0,123,0.4)
                      url("../gifs/controlgastos.gif")
                      left bottom
                      no-repeat
                    `,
                    });
                  }}
                >
                  Ver info
                </Button>
                {/* &nbsp;
                <Button variant="primary">
                  <a className='text-light text-decoration-none'  href="https://control-gastos-gold.vercel.app/">Ver proyecto</a>
                </Button>
                &nbsp;
                <Button className="mx- mt-1" variant='primary'>
                  <a className='text-light text-decoration-none' href="https://github.com/lamontanarog/controlGastos" >Ver Repositorio</a>
                </Button> */}
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card className="text-center" style={{ width: "19rem" }}>
              <Card.Img
                variant="top"
                src="../icons/Splendora_Cosmetics-logos.jpeg"
              />
              <Card.Body>
                <Card.Title>Splendora Cosmetics</Card.Title>
                <Card.Text>
                  Proyecto realizado con HTML, css, boostrap, JavaScript, apis
                </Card.Text>
                <Button variant="primary">
                  <a
                    className="text-light text-decoration-none"
                    href="https://lamontanarog.github.io/SplendoraCosmetics/"
                  >
                    Ver proyecto
                  </a>
                </Button>
                &nbsp;
                <Button variant="primary">
                  <a
                    className="text-light text-decoration-none"
                    href="https://github.com/lamontanarog/SplendoraCosmetics/"
                  >
                    Ver Repositorio
                  </a>
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card className="text-center" style={{ width: "19rem" }}>
              <Card.Img variant="top" src="../icons/logoPodiatryLove.jpg" />
              <Card.Body>
                <Card.Title>Podiatry Love</Card.Title>
                <Card.Text>
                  Proyecto realizado con HTML, css, boostrap, JavaScript, apis
                </Card.Text>
                <Button variant="primary">
                  <a
                    className="text-light text-decoration-none"
                    href="https://lamontanarog.github.io/PodiatryLove/"
                  >
                    Ver proyecto
                  </a>
                </Button>
                &nbsp;
                <Button variant="primary">
                  <a
                    className="text-light text-decoration-none"
                    href="https://github.com/lamontanarog/PodiatryLove/"
                  >
                    Ver Repositorio
                  </a>
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col mt-5">
            <Card className="text-center" style={{ width: "19rem" }}>
              <Card.Img variant="top" src="../icons/iconoVintage.jpg" />
              <Card.Body>
                <Card.Title>Vintage Golden Show</Card.Title>
                <Card.Text>
                  Proyecto Ecommers, consumiendo apis, utilizando ReactJs y firebase
                </Card.Text>
                <Button variant="primary">
                  <a
                    className="text-light text-decoration-none"
                    href="https://lamontanaro-vintage-golden-show-xmxc.vercel.app/"
                  >
                    Ver proyecto
                  </a>
                </Button>
                &nbsp;
                <Button variant="primary">
                  <a
                    className="text-light text-decoration-none"
                    href="https://github.com/lamontanarog/Lamontanaro-vintage-golden-show"
                  >
                    Ver Repositorio
                  </a>
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default MisProyectos;
