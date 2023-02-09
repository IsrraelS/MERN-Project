import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers';

const schema = yup.object().shape({
    password: yup
    .string("La contrase#a debe ser un texto")
    .required("Debes ingresar una contrase#a")
    .min(6, "La contrase;a debe tener al menos 6 caracteres")
})

export default yupResolver(schema)