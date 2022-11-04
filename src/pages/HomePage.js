import { Container, Row, Col, Button } from "react-bootstrap"
import routes from "../helpers/routes"
import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <Container>
            <Row className="mt-5">
                <Col xs={{ span: 12 }} md={{ span: 6 }} className="mb-5">
                    <h2>Bienvenid@ a gestor de Tareas</h2>
                    <p> Aqui podras gestionar tus proyectos! </p>
                    <p> Marca tus tareas como terminadas, agrega, elimina, o actualiza </p>
                    <div>
                        <Link to={routes.login}> Ingresa </Link> o
                        <Button as={ Link } to={routes.register} className="ml-1"> Crea una cuenta </Button> 
                    </div>
                </Col>
                <Col >
                    <img
                    className="img-fluid" 
                    src="/img/task-manager.svg"
                    alt="gestor de tareas"
                    />
                    <p>Organiza tu tiempo, aumenta tu rendimiento!</p>
                </Col> 
           </Row>
       </Container>
    )
}
