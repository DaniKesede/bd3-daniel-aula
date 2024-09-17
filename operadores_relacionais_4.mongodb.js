/* NOME DO BANCO DE DADOS */
const database ='BD3-DANIEL-AULA';

/* NOME DO BANCO DA COEÇÃO DE DADOS */
const collection ='LIVRARIA';

/* CRIAR OU ACESSAR O BANCO DE DADOS */
use(database);

/* SELECIONA UM LIVRO DE UMA CATEGORIA OU, DE UM VALOR DETERMINADO */

db[collection].find({
    
    $or:[
        {categoria : {$eq: 'Fantasia Heroica'}},
        {valor : {$lte:100}}
    ]
});
