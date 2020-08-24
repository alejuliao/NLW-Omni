import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(express.json());
//localhost:3333/users
//localhost:3333/contacts
//localhost:3333/etc

  //GET: BUSCAR OU LISTAR UMA IMFORMAÇÃO
  //POST: CRIAR ALGUMA NOVA INFORMACAP
  //PUT ATUALIZAR UMA INFORMACAO EXISTENTE
  //DELETE DELETAR UM INFORMACAO EXISTENTE

  //corpo (request body): Dados para criação ou atualização de um registro
  //Route PArams:Identificar qual recurso eu quero atualizar ou deletar
  //Query Params: paginaçao, filtros, ordenaçao

  //foi para o routes.ts
// app.get('/', (request, response)=>{

//   return response.json({ message: 'Helloo World' });
//   });


app.use(routes);
app.use(cors);

app.listen(3333);

