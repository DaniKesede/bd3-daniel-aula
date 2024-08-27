/* NOME DO BANCO DE DADOS */
const database ='BD3-DANIEL-AULA';

/* NOME DO BANCO DA COEÇÃO DE DADOS */
const collection ='LIVRARIA';

/* CRIAR OU ACESSAR O BANCO DE DADOS */
use(database);

db[collection].find(
    {"descricao":/Robôs/i},
    {"_id":0, "codigo":0}
);