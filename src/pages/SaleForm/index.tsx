import React, { Props } from 'react';
import * as Yup from 'yup';

import { Container } from './styles';
import { InputFloat } from '../../components/Inputfloat/styles';

import GetCep from '../../services/cep';





        const cepResp = (async () => {
            const data = await GetCep('79814460', 'json');
            console.log(data)
          })()

console.log(cepResp);

const SaleForm: React.FC = () => {


    
    return(
        
        <Container>
            <div>
                <InputFloat>
                    <input required type="text" placeholder=" "/>
                    <label>Razão Social</label>
                </InputFloat>
                <InputFloat>
                    <input required type="text" placeholder=" "/>
                    <label>Fantasia</label>
                </InputFloat>
            </div>
            <div>
                <InputFloat>
                    <input required type="text" placeholder=" "/>
                    <label>CPF/CNPJ</label>
                </InputFloat>
                <InputFloat>
                    <input required type="text" placeholder=" "/>
                    <label>IE/RG</label>
                </InputFloat>
                <InputFloat>
                    <input required type="text" placeholder=" "/>
                    <label>Nome do Responsável</label>
                </InputFloat>
            </div>
            <div>
                <InputFloat>
                    <input required type="text" placeholder=" "/>
                    <label>Celular Responsável</label>
                </InputFloat>
                <InputFloat>
                    <input required type="text" placeholder=" "/>
                    <label>Telefone Comercial</label>
                </InputFloat>
                <InputFloat>
                    <input required type="text" placeholder=" "/>
                    <label>E-mail</label>
                </InputFloat>
            </div>
            <div>
                <InputFloat>
                    <input required type="text" placeholder=" "/>
                    <label>Cep</label>
                </InputFloat>
                <InputFloat>
                    <input required type="text" placeholder=" "/>
                    <label>Logradouro</label>
                </InputFloat>
            </div>
            <div>
                <InputFloat>
                    <input required type="text" placeholder=" "/>
                    <label>Nº</label>
                </InputFloat>
                <InputFloat>
                    <input required type="text" placeholder=" "/>
                    <label>Bairro</label>
                </InputFloat>
                <InputFloat>
                    <input required type="text" placeholder=" "/>
                    <label>Cidade</label>
                </InputFloat>
                <InputFloat>
                    <select style={{width: "40px"}} name="" id="">
                        <option value="">--</option>
                        <option value="">MS</option>
                        <option value="">PR</option>
                    </select>
                    <label>UF</label>
                </InputFloat>
            </div>
        </Container>
    )
}

export default SaleForm;