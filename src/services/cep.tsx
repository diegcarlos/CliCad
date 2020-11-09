import { useEffect, useState } from 'react';
import Axios from 'axios'

interface DataCep {
    bairro: string;
    cep: string;
    complemento?: string;
    ddd: Number;
    ibge: Number;
    gia?: string;
    localidade: string;
    siafe?: string
    uf: string
}

// async function buscaCep(cep: any, dataType: any) {
//     const { data } = await Axios(`https://viacep.com.br/ws/${cep}/${dataType}`);
//     return data;
// }

const buscaCep = (cep: string, dataType:'json' | 'jsonp' | 'xml' | 'querty') => 
        Axios(`https://viacep.com.br/ws/${cep}/${dataType}`)

function Cep(cep:string, typeData:'json' | 'jsonp' | 'xml' | 'querty') {

    const [address, setAddress] = useState({});


      useEffect(() => {
        async function fetchData() {
          const { data }: any = await buscaCep(cep, typeData);
          setAddress(data);

        }
        fetchData();
      }, []);
      
    return (address)
}

export default Cep
