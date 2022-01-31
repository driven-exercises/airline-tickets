Você trabalha em uma companhia aérea, no time de compra e verificação de passagens.

Sua ultima tarefa foi garantir que ninguém com um pouco de conhecimento em desenvolvimento tentasse burlar sua API.

Para isso, crie validações nas seguintes rotas no servidor, utilizando `joi` e `Regex`, retornando o status code 422 caso a validação não seja bem sucedida 

POST `/ticket` (informações vem do body)

    full_name é string e obrigatório
    age é inteiro e obrigatório
    ticket_number tem o formato AAA9999 (3 letras seguidas de 4 números) e é obrigatório

GET `/ticket/:number` (informações vem de params)

    number tem o formato AAA9999 (3 letras seguidas de 4 números) e é obrigatório