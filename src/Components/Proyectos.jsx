import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Swal from "sweetalert2";
import "./proyectos.css";
function MisProyectos() {
  return (
    <>
      <div className="container mt-5">
        <div className="row text-center ">
          <div className="col-xl-auto col-md-auto col-sm-auto ">
            <Card>
              <Card.Img variant="top" src="/icons/iconoControlDegastos.webp" />
              <Card.Body>
                <Card.Title>Control de gastos</Card.Title>
                <Card.Img src="https://skillicons.dev/icons?i=react,firebase,css,bootstrap,git,vite" className="mb-2" />
                <Button
                  className="buttons-proyects mx-4"
                  onClick={() => {
                    Swal.fire({
                      title:
                        "El proyecto consiste en una aplicación para gestionar los gastos, ingresos y el balance general de los usuarios. Ha sido desarrollado utilizando ReactJS, haciendo uso de hooks, context y diversas librerías para una mejor organización y funcionalidad. Además, se integra Firebase para gestionar la autenticación y el control de usuarios, brindando así una experiencia segura y personalizada.",
                      width: 900,
                      position: "center",
                      padding: "4em",
                      color: "#fff",
                      background: `
                      url(/img/bannerdollar.png)
                      no-repeat
                      center
                      /cover
                      `,
                    });
                  }}
                >Ver info</Button>
                &nbsp; 
                <Button className="buttons-proyects">
                  <a
                    className="text-dark text-decoration-none"
                    href="https://control-gastos-gold.vercel.app/"
                  > Ver proyecto</a></Button>
                &nbsp;
                <Button className="buttons-proyects mt-1">
                  <a
                    className="text-dark text-decoration-none"
                    href="https://github.com/lamontanarog/controlGastos"
                  >
                    Ver Repositorio
                  </a>
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-xl-auto col-md-auto col-sm-auto">
            <Card>
              <Card.Img
                variant="top"
                src="/icons/IconSplendora.webp"
              />
              <Card.Body>
                <Card.Title>Splendora Cosmetics</Card.Title>
                <Card.Img src="https://skillicons.dev/icons?i=html,javascript,css,bootstrap,git" className="mb-2" />
                <Button
                  className="buttons-proyects mx-4"
                  onClick={() => {
                    Swal.fire({
                      title:
                        "El proyecto es un E-commer dedicado a la venta de productos cosméticos. La plataforma cuenta con un carrito de compras incorporado que permite a los usuarios seleccionar y comprar productos de manera sencilla. Además, la aplicación consume una API que proporciona el valor actual del dólar para realizar la conversión de precios de los productos a pesos, brindando así una experiencia de compra más transparente para los usuarios.",
                      width: 900,
                      position: "center",
                      padding: "4em",
                      color: "#fff",
                      background: `
                      url(/img/Backgroundcolors.png)
                      no-repeat
                      center
                      /cover
                      `,
                    });
                  }}
                >
                  Ver info
                </Button>
                &nbsp;
                <Button className="buttons-proyects">
                  <a
                    className="text-dark text-decoration-none"
                    href="https://lamontanarog.github.io/SplendoraCosmetics/"
                  >
                    Ver proyecto
                  </a>
                </Button>
                &nbsp;
                <Button className="buttons-proyects mt-1">
                  <a
                    className="text-dark text-decoration-none"
                    href="https://github.com/lamontanarog/SplendoraCosmetics/"
                  >
                    Ver Repositorio
                  </a>
                </Button>
              </Card.Body>
            </Card>
          </div>

          <div className="row text-center mt-5">
            <div className="col-xl-auto col-md-auto col-sm-auto">
              <Card>
                <Card.Img variant="top" src="/icons/logoPodiatryLove.webp" />
                <Card.Body>
                  <Card.Title>Podiatry Love</Card.Title>
                  <Card.Img src="https://skillicons.dev/icons?i=html,css,sass,bootstrap,git" className="mb-2" />
                  <Button
                    className="buttons-proyects mx-4"
                    onClick={() => {
                      Swal.fire({
                        title:
                          "El proyecto consiste en el desarrollo de un sitio web informativo y de contacto para una médica podóloga.",
                        width: 900,
                        position: "center",
                        padding: "5em",
                        color: "#fff",
                        background: `
                        url(/img/BackgroundPodologa.jpg)
                        no-repeat
                        center
                        / cover
                        `,
                      });
                    }}
                  >
                    Ver info
                  </Button>
                  &nbsp;
                  <Button className="buttons-proyects">
                    <a
                      className="text-dark text-decoration-none"
                      href="https://lamontanarog.github.io/PodiatryLove/"
                    >
                      Ver proyecto
                    </a>
                  </Button>
                  &nbsp;
                  <Button className="buttons-proyects mt-1" >
                    <a
                      className="text-dark text-decoration-none"
                      href="https://github.com/lamontanarog/PodiatryLove/"
                    >
                      Ver Repositorio
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-xl-auto col-md-auto col-sm-auto">
              <Card>
                <Card.Img variant="top" src="/icons/iconoVintage.webp" />
                <Card.Body>
                  <Card.Title>Vintage Golden Show</Card.Title>
                  <Card.Img src="https://skillicons.dev/icons?i=react,firebase,css,bootstrap,git" className="mb-2" />
                  <Button
                    className="buttons-proyects mx-4"
                    onClick={() => {
                      Swal.fire({
                        title:
                          "El proyecto es una aplicación de E-commerce que utiliza Firebase para gestionar tanto los productos como las órdenes de los usuarios. El frontend se desarrolló con ReactJS, implementando hooks, context y varias librerías para mejorar la organización y funcionalidad.",
                        width: 900,
                        height: "900px",
                        position: "center",
                        padding: "4em",
                        color: "#fff",
                        background: `
                      url("/img/BackgroundCarrito.png")
                      no-repeat
                      center
                      /cover
                      `,
                      });
                    }}
                  >
                    Ver info
                  </Button>
                  &nbsp;
                  <Button className="buttons-proyects">
                    <a
                      className="text-dark text-decoration-none"
                      href="https://lamontanaro-vintage-golden-show-xmxc.vercel.app/"
                    >
                      Ver proyecto
                    </a>
                  </Button>
                  &nbsp;
                  <Button className="buttons-proyects mt-1">
                    <a
                      className="text-dark text-decoration-none"
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
      </div>
    </>
  );
}

export default MisProyectos;
