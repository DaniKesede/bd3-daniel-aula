/* NOME DO BANCO DE DADOS */
const database ='BD3-DANIEL-AULA';

/* NOME DO BANCO DA COEÇÃO DE DADOS */
const collection ='LIVRARIA';

/* CRIAR OU ACESSAR O BANCO DE DADOS */
use(database);

/* SELECIONA LIVROS COM VALORES ENTRE 100 E 150 */

db[collection].find({
    valor : {$gte:100, $lte:150}
});
