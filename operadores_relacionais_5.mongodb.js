/* NOME DO BANCO DE DADOS */
const database ='BD3-DANIEL-AULA';

/* NOME DO BANCO DA COEÇÃO DE DADOS */
const collection ='LIVRARIA';

/* CRIAR OU ACESSAR O BANCO DE DADOS */
use(database);

/* LISTAR TODOS OS LIVROS DO Tolkien EM ORDEM DE VALOR CRESCENTE */
// db[collection].find({
//     autor:'J.R.R Tolkien'
// }).sort({valor:1});

/* LISTAR TODOS OS LIVROS DO Tolkien EM ORDEM DE VALOR DECRESCENTE*/
db[collection].find({
    autor:'J.R.R Tolkien'
}).sort({valor:-1});