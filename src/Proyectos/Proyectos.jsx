import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MisProyectos() {
    return (
        <>
        <div className='container'>
            <div className='row'>

        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../iconoControlDegastos.jpg" />
      <Card.Body>
        <Card.Title>Control de gastos</Card.Title>
        <Card.Text>
        Proyecto realizado con Reactjs, css, boostrap, firebase
        </Card.Text>
        <Button variant="primary">
        <a href="https://control-gastos-gold.vercel.app/">Ver proyecto</a>
        </Button>
        <Button variant='primary'>
        <a href="https://github.com/lamontanarog/controlGastos" >Ver Repositorio</a>
        </Button>
      </Card.Body>
    </Card>
            </div>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../Splendora_Cosmetics-logos.jpeg" />
      <Card.Body>
        <Card.Title>Splendora Cosmetics</Card.Title>
        <Card.Text>
        Proyecto realizado con HTML, css, boostrap, JavaScript, apis
        </Card.Text>
        <Button variant="primary">
        <a href="https://lamontanarog.github.io/SplendoraCosmetics/">Ver proyecto</a>
        </Button>
        <Button variant='primary'>
        <a href="https://github.com/lamontanarog/SplendoraCosmetics/" >Ver Repositorio</a>
        </Button>
      </Card.Body>
    </Card>
        </div>
        </>

    );
}

export default MisProyectos;
