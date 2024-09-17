/* NOME DO BANCO DE DADOS */
const database ='BD3-DANIEL-AULA';

/* NOME DO BANCO DA COEÇÃO DE DADOS */
const collection ='LIVRARIA';

/* CRIAR OU ACESSAR O BANCO DE DADOS */
use(database);

/* SELECIONA O LIVRO COM VALOR MAIOR QUE DETERMINADO NÚMERO */
db[collection].find(
    {valor: {$gt:100}}
);

/* SELECIONA O LIVRO COM VALOR MAIOR QUE DETERMINADO NÚMERO */
db[collection].find(
    {valor: {$lte:100}}
);