import { Container, Row, Col } from "react-bootstrap"

export default function NotFoundPage() {
    return (
        <Container>
            <Row>
                <Col>
                    <img src="/img/404-not-found.svg" alt="Error-404" />
                </Col>
            </Row>
            <h1>NotFoundPage</h1>
        </Container>
    )
}
