import { Modal, Alert, Button, Form } from "react-bootstrap"
import UseAuth from "../../../auth/UseAuth"

export default function ChangePasswordModal({isOpen, close}) {

        const { logout } = UseAuth()

        const handleDelate = () => {
            // Peticion http
            // close()
            logout();
        }

    return (
        <Modal show={true} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Eliminar cuenta</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}>Cancelar</Button>
                <Button variant="primary" onClick={handleDelate}>Actualizar Contraseña</Button>
            </Modal.Footer>
        </Modal>
    )
}