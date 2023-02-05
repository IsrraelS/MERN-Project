import { Modal, Alert, Button, Form } from "react-bootstrap"
import UseAuth from "../../../auth/UseAuth"

export default function ChangePasswordModal({isOpen, close}) {
        const{ register, handleSubmit, formState: { errors } } = useForm();

        const { logout } = UseAuth()

        const handleDelate = () => {
            // Peticion http
            // close()
            logout();
        }
        const onSubmit = (formData) => {
            console.log(formData)
        } 

    return (
        <Modal show={true} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Eliminar cuenta</Modal.Title>
            </Modal.Header>
            </Modal.Header> 
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>Nuevo Password</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Escribe tu nombre" 
                            {...register("name")}
                        />
                        {errors?.name && (
                            <FormText>
                                <Alert variant="danger">
                                    {errors?.name.message}
                                </Alert>
                            </FormText>
                        )}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Escribe tu correo electronico" 
                            {...register("email")}
                        />
                        {errors?.email && (
                            <FormText>
                                <Alert variant="danger">
                                    {errors?.email.message}
                                </Alert>
                            </FormText>
                        )}
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}>Cancelar</Button>
                <Button variant="primary" onClick={handleDelate}>Actualizar Contraseña</Button>
                <Button variant="primary" onClick={handleSubmit(onSubmit)}>Actualizar Contraseña</Button>
            </Modal.Footer>
        </Modal>
    )
}