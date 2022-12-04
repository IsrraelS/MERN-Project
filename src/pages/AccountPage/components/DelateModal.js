import { Modal, Alert, Button } from "react-bootstrap"

export default function DelateModal() {
    return (
        <Modal show={true}>
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
                <Button variant="secondary">Cancelar</Button>
                <Button variant="danger">Eliminar mi cuenta</Button>
            </Modal.Footer>
        </Modal>
    )
}