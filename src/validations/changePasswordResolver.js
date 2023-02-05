import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers';

const schema = yup.object().shape({
    password: yup.string().required()
})

export default yupResolver(schema)