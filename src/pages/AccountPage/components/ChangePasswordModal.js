import { useEffect } from "react";
import { Modal, Alert, Button, Form, FormText } from "react-bootstrap"
import { useForm } from 'react-hook-form'
import changePasswordResolver from '../../../validations/changePasswordResolver';

export default function ChangePasswordModal({isOpen, close}) {
        const{ register, handleSubmit, formState: { errors }, reset } = 
        useForm({ resolver: changePasswordResolver });

        const onSubmit = (formData) => {
            alert("cambio de password")
        }
        
        useEffect(() => { 
            if(!isOpen){
                reset()
            }
        }, [isOpen])

    return (
        <Modal show={isOpen} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Eliminar cuenta</Modal.Title>
            </Modal.Header> 
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>Nuevo Password</Form.Label>
                        <Form.Control
                            placeholder="Escribe tu nombre" 
                            {...register("password")}
                            type="password"
                        />
                        {errors?.password && (
                            <FormText>
                                <Alert variant="danger">
                                    {errors.password.message}
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

/*<Form>
<Form.Group>
    <Form.Label>Email</Form.Label>
    <Form.Control
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
</Form>*/