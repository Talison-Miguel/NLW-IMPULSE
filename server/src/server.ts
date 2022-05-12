import express from 'express'
import cors from 'cors'
import { routes } from './routes';


const app = express()

app.use(cors());
app.use(express.json());
app.use(routes);

// GET , POST, PUT, PATCH, DELETE
//GET   _ buscar informaçoes 
//POST  _ cadastrar informaçoes
//PUT   _ atualiza informaçoes de uma entidade
//PATCH _ atualizar uma enformaçao unica em uma entidade
//DELETE _ deletar informaçoes  



  
app.listen(process.env.PORT|| 3333, () => {
    console.log('HTTP server running');
})