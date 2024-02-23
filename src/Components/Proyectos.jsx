import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Swal from "sweetalert2";
import "./proyectos.css";
function MisProyectos() {
  return (
    <>
      <div className="container mt-5">
        <div className="row ">
          <div className="col-md-4">
            <Card className="text-center" style={{ width: "19rem" }}>
              <Card.Img variant="top" src="/icons/iconoControlDegastos.jpg" />
              <Card.Body>
                <Card.Title>Control de gastos</Card.Title>
                <Card.Text>
                  Proyecto realizado con Reactjs, Css, Bootstrap, Firebase.
                </Card.Text>
                <Button
                  className="mx-4"
                  onClick={() => {
                    Swal.fire({
                      title:
                        "El proyecto consiste en una aplicación para gestionar los gastos, ingresos y el balance general de los usuarios. Ha sido desarrollado utilizando ReactJS, haciendo uso de hooks, context y diversas librerías para una mejor organización y funcionalidad. Además, se integra Firebase para gestionar la autenticación y el control de usuarios, brindando así una experiencia segura y personalizada.",
                      width: 700,
                      padding: "4em",
                      color: "#fff",
                      background: "#aecb9d ",
                      backdrop: `
                      rgba(0,0,123,0.4)
                      url("/gifs/controlgastos.gif")
                      left bottom
                      no-repeat
                    `,
                    });
                  }}
                >
                  Ver info
                </Button>
                &nbsp;
                <Button variant="primary">
                  <a
                    className="text-light text-decoration-none"
                    href="https://control-gastos-gold.vercel.app/"
                  >
                    Ver proyecto
                  </a>
                </Button>
                &nbsp;
                <Button className="mx- mt-1" variant="primary">
                  <a
                    className="text-light text-decoration-none"
                    href="https://github.com/lamontanarog/controlGastos"
                  >
                    Ver Repositorio
                  </a>
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card className="text-center" style={{ width: "19rem" }}>
              <Card.Img
                variant="top"
                src="/icons/Splendora_Cosmetics-logos.jpeg"
              />
              <Card.Body>
                <Card.Title>Splendora Cosmetics</Card.Title>
                <Card.Text>
                  Proyecto realizado con HTML, Css, Bootstrap, JavaScript, Apis
                </Card.Text>
                <Button
                  className="mx-4"
                  onClick={() => {
                    Swal.fire({
                      title:
                        "El proyecto es un E-commer dedicado a la venta de productos cosméticos. La plataforma cuenta con un carrito de compras incorporado que permite a los usuarios seleccionar y comprar productos de manera sencilla. Además, la aplicación consume una API que proporciona el valor actual del dólar para realizar la conversión de precios de los productos a pesos, brindando así una experiencia de compra más transparente para los usuarios.",
                      width: 700,
                      padding: "4em",
                      color: "#fff",
                      background: "url(/img/Backgroundcolors.avif) ",
                      backdrop: `
                      rgba(0,0,123,0.4)
                      url("/gifs/SplendoraGif.gif")
                      left bottom
                      no-repeat
                    `,
                    });
                  }}
                >
                  Ver info
                </Button>
                &nbsp;
                <Button variant="primary">
                  <a
                    className="text-light text-decoration-none"
                    href="https://lamontanarog.github.io/SplendoraCosmetics/"
                  >
                    Ver proyecto
                  </a>
                </Button>
                &nbsp;
                <Button className="mt-1" variant="primary">
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
              <Card.Img variant="top" src="/icons/logoPodiatryLove.jpg" />
              <Card.Body>
                <Card.Title>Podiatry Love</Card.Title>
                <Card.Text>
                  Proyecto realizado con HTML, Css, Bootstrap, Sass.
                </Card.Text>
                <Button
                  className="mx-4"
                  onClick={() => {
                    Swal.fire({
                      title:
                        "El proyecto consiste en el desarrollo de un sitio web informativo y de contacto para una médica podóloga. El sitio proporcionará información relevante sobre los servicios ofrecidos por la podóloga, así como detalles sobre su experiencia y formación profesional. Además, incluirá secciones informativas sobre diferentes condiciones podológicas, consejos de cuidado del pie y recomendaciones para mantener una buena salud podológica. La página de contacto permitirá a los usuarios ponerse en contacto con la médica podóloga para hacer consultas, programar citas o solicitar más información sobre los servicios ofrecidos.",
                      width: 900,
                      padding: "4em",
                      color: "#fff",
                      background: `url(https://plus.unsplash.com/premium_photo-1664373622112-00bc8a7925a3?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)
                      no-repeat
                      center
                      `,
                      backdrop: `
                      rgba(0,0,123,0.4)
                      url("/gifs/PodoGif.gif")
                      left bottom
                      no-repeat
                    `,
                    });
                  }}
                >
                  Ver info
                </Button>
                &nbsp;
                <Button variant="primary">
                  <a
                    className="text-light text-decoration-none"
                    href="https://lamontanarog.github.io/PodiatryLove/"
                  >
                    Ver proyecto
                  </a>
                </Button>
                &nbsp;
                <Button className="mt-1" variant="primary">
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
              <Card.Img variant="top" src="/icons/iconoVintage.jpg" />
              <Card.Body>
                <Card.Title>Vintage Golden Show</Card.Title>
                <Card.Text>
                Este sitio web está construido utilizando ReactJS y Firebase como tecnologías principales.
                </Card.Text>
                <Button
                  className="mx-4"
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
                      url("/gifs/controlgastos.gif")
                      left bottom
                      no-repeat
                    `,
                    });
                  }}
                >
                  Ver info
                </Button>
                &nbsp;
                <Button variant="primary">
                  <a
                    className="text-light text-decoration-none"
                    href="https://lamontanaro-vintage-golden-show-xmxc.vercel.app/"
                  >
                    Ver proyecto
                  </a>
                </Button>
                &nbsp;
                <Button className="mt-1" variant="primary">
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
