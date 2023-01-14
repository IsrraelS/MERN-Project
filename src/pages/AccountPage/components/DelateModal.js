import { Modal, Alert, Button } from "react-bootstrap"
import UseAuth from "../../../auth/UseAuth"

export default function DelateModal({isOpen, close}) {

        const { logout } = UseAuth()

        const handleDelate = () => {
            // Peticion http
            // close()
            logout();
        }

    return (
        <Modal show={isOpen} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Eliminar cuenta</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Alert variant="danger">
                    Estas seguro que deseas eliminar permanentemente
                    su cuenta?<b>se perderan todos sus datos almacenados</b>?
                </Alert>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}>Cancelar</Button>
                <Button variant="danger" onClick={handleDelate}>Eliminar mi cuenta</Button>
            </Modal.Footer>
        </Modal>
    )
}