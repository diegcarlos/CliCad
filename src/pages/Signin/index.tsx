import React, {useCallback, useRef} from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from 'yup'

import Input from '../../components/Input'
import Button from '../../components/Button'

import getValidationsErrors from '../../utils/getValidationsErros'


import logo from '../../assets/logo.jpg';

import { Container, Content } from './styles';


interface SignInFormData {
  email: string;
  senha: string;
}
 const SignIn: React.FC = () => {



const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback( async (data: SignInFormData) => {
    try{
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
            email: Yup.string()
                .required('E-mail Obrigatório')
                .email('Digite o Email Válido'),
            senha: Yup.string()
                .required('Senha Obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });


        
    }catch (err){
        if (err instanceof Yup.ValidationError) {
            const errors = getValidationsErrors(err)
            formRef.current?.setErrors(errors);

            return

        }
    }
    
}, [])
   return(
        <Container>
            <Content>
              <img src={logo} alt="Logo"/>
              <h3>Faça o Login</h3>

              <Form ref={formRef} onSubmit={handleSubmit}>
                <Input icon={FiMail} name="email" placeholder="E-mail"/>
                <Input icon={FiLock} type="password" name="senha" placeholder="Senha"/>

                <Button type="submit">Entrar</Button>
              </Form>

            </Content> 
        </Container>
   );
 };
export default SignIn;