import Axios from 'axios'

async function getCep(cep:string, typeData:'json' | 'jsonp' | 'xml' | 'querty') {
    const { data } = await Axios.get(`http://viacep.com.br/ws/${cep}/${typeData}`);
    return data;

}
export default getCep