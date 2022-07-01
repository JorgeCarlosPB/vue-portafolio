
import dataFuncionarios from '@/modules/portfolio/helpers/dataFuncionarios'
import axios from "axios";

const hojavidaApi = axios.create({
    baseURL: dataFuncionarios
})

//console.log(process.env.NODE_ENV)  //Durante Testing
export default hojavidaApi