/* NOME DO BANCO DE DADOS */
const database ='BD3-DANIEL-AULA';

/* NOME DO BANCO DA COEÇÃO DE DADOS */
const collection ='LIVRARIA';

/* CRIAR OU ACESSAR O BANCO DE DADOS */
use(database);

/* ALTERA OS DADOS DE UM DOCUMENTO DA COLLECTION */
db[collection].updateOne(
    {titulo: 'As cavernas de Aço'},
    { $set:{valor:'250'} }
);