import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import UseAuth from "../../auth/UseAuth";
import DelateModal from "./components/DelateModal";


export default function AccountPage() {
    const { user } = UseAuth();

    const [isOpenDelateModal, setIsOpenDelateModal] = useState (false);
    const openDelateModal = () => setIsOpenDelateModal (true)
    const closeDelateModal = () => setIsOpenDelateModal (false)

    return (
       <>
       <Container>
            <Row className="mt-4">
                <Col xs={12} className="text-center">
                <img
                    src="/img/female_avatar.svg"
                    alt="Profile"
                    style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        objectFit: 'cover'
                    }}
                    />
                </Col>
                <Col className="mt-4">
                    <Card style= {{ maxWidth: '360' }} className="p4">
                        <p className="text-center"><b>Nombre: </b>{user.name}</p>
                        <p className="text-center"><b>Correo: </b>{user.email}</p>
                        <p className="text-center"><b>Rol: </b>{user.role}</p>
                        <Button variant="warning">Editar cuenta</Button>
                        <Button variant="link" className="mt-1">Cambiar contraseña</Button>
                        <Button variant="link" className="mt-3 text-danger"
                            onClick={openDelateModal}
                        >Eliminar cuenta</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
        <DelateModal
            isOpen={isOpenDelateModal}
            close={closeDelateModal}
        />
        </>
    );
}
