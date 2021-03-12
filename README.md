# Estudando API, REST e RESTful

## O que é uma API?

"É um conjunto de rotinas e padrões de programação para acesso a um aplicativo de software ou plataforma baseado na Web. Acrônimo para Application Programming Interface. (Interface de Programação de Aplicativos)"

Exemplo do restaurante:

Um restaurante é formado por:

- Cliente (Client) 
- Garçom (API): transporta os pedidos da cliente para a cozinha, e, retorna os pratos da cozinha para o cliente.
- Cozinha (Server)

A API busca informações ou funções no Server para retornar ao Client.
Ela é responsável por estabelecer comunicação entre diferentes serviços.
Meio de campo entre as tecnologias.
Intermediador para troca de informações.

## REST

"Acrônimo para REpresentation State Transfer. (Transferência de Estado Representativo)" 

Representativo = transferência de dados de uma maneira simbólica, didática, figurativa.

A transferência de dados geralemnte é feita utilizando o protocolo HTTP.

O REST delimita algumas obrigações nessas transferências de dados. ("Boas práticas")

Exemplo do restaurante:

- Cliente (Client): Ele vai ao restaurante e espera um ambiente agradável, limpo, acolhedor, etc.
- Garçom (API): intermediador.
- Cozinha (Server): Espera servir sua comida à um cliente educado, que respeite o ambiente, que não traga problemas ao restaurante e aos clientes, etc.

Dados = Resources - uma entidade, um obejto.

## RESTful

RESTful, é a aplicação dos padrões REST.

### 6 Necessidades (constraints) para ser RESTful

- _Client-server_: Separação do cliente e do armazenamento de dados (servidor), dessa forma, podemos ter uma portabilidade do nosso sistema, usando o React para WEB e React Native para o smartphone, por exemplo.

- _Stateless_: (Stateless = Sem estado) Cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessárias para o servidor entender e responder (RESPONSE) a requisição (REQUEST). Exemplo : A sessão do usuário deverá ser enviada em todas as requisições, para saber se aquele usuário está autenticado e apto a usar os serviços. O servidor não pode lembrar que o cliente foi autenticado na requisição anterior, pois senão estaria armazenando um estado.

- _Cacheable_: As respostas para uma requisição, deverão ser explícitas ao dizer se aquela requisição, pode ou não ser cacheada pelo cliente.

- _Layered System_: O cliente acessa a um endpoint, sem precisar saber da complexidade, de quais passos estão sendo necessários para o servidor responder a requisição, ou quais outras camadas o servidor estará lidando, para que a requisição seja respondida.

- _Uniform Interface_: Manter uma uniformidade, uma constância, um padrão na construção da interface. Nossa API precisa ser coerente para quem vai consumi-lá. Precisa fazer sentido para o cliente e não ser confusa. Logo, coisas como: o uso correto dos verbos HTTP; endpoints coerentes (todos os endpoints no plural, por exemplo); usar somente uma linguagem de comunicação (json) e não várias ao mesmo tempo; sempre enviar respostas aos clientes; são exemplos de aplicação de uma interface uniforme.

- _Code on demand (optinal)_: Dá a possibilidade da nossa aplicação pegar códigos, como o javascript, por exemplo, e executar no cliente.

## Boas Práticas

- Utilizar verbos HTTP para as requisições.

- Não importa se é plural ou singular na criação dos endpoints. (Manter o mesmo padrão)

- Não deixar barra no final do endpoint.

- Nunca deixe o cliente sem resposta.

## Verbos HTTP

- GET: Receber dados de um Resource.

- POST: Enviar dados ou informações para serem processados por um Resource.

- PUT: Atualizar dados de um Resource.

- DELETE: Deletar um Resource

## Status das respostas

- 1xx: Informação

- 2xx: Sucesso

    - 200: OK

    - 201: CREATED

    - 204: Não tem conteúdo PUT POST DELETE

- 3xx: Redirection

- 4xx: Client Error

    - 400: Bad Request

    - 404: Not Found!

- 5xx: Server Error 

    - 500: Internal Server Error

## Passo a passo (Code)

yarn init -y

yarn add express
