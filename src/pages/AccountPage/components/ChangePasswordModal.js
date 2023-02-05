import { Modal, Alert, Button, Form, FormText } from "react-bootstrap"
import { useForm } from 'react-hook-form'

export default function ChangePasswordModal({isOpen, close}) {
        const{ register, handleSubmit, formState: { errors } } = useForm();

        const onSubmit = (formData) => {
            console.log(formData)
        } 

    return (
        <Modal show={true} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Eliminar cuenta</Modal.Title>
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
                <Button variant="primary" onClick={handleSubmit(onSubmit)}>Actualizar Contraseña</Button>
            </Modal.Footer>
        </Modal>
    )
}