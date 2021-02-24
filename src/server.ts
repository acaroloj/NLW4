import express, { response } from 'express';

const app  = express();

/**
 * GET > Busca
 * Post > Salvar 
 * PUT > Alterar 
 * DELETE > Deletar 
 * PATCH > Alteração específica
 */

// http://localhost:3332/users

app.get("/", (request, response) => {
  return response.json({ message: "Hello Word -  NLW04 "});
});

// 1 param > Rota(Rcurso API)
// 2 param > request, responde

app.post("/", (request, response) => {
  //Receveu os dados para salvar
  return response.json({ message: "Os dados foram salvos com sucesso "});
});



  app.listen(3332, () => console.log("Server is running"));