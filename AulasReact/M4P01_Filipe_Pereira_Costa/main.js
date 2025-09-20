// Como sabe, o tratamento de cookies só funciona dentro de uma página web, não num arquivo local. Portanto…
// 1. Aceder à página Google, abrir as ferramentas para desenvolvedores e…


// • Listar todas as cookies armazenadas.
// • Adicione um novo cookie “M4_UD01_P01” cujo valor seja a data atual em milissegundos e a sua data de expiração é 31/12 do
// ano atual.
// • Exibir como um objeto, usando o snippet abaixo, todos os cookies armazenados, incluindo o inserido anteriormente.
// • Exclua o cookie criado na secção anterior e mostre o objeto com os cookies atualizados novamente. 



document.cookie.split(';').reduce((cookies, cookie) => {
    const [name, value] = cookie.split('=').map(c => c.trim());
    return { ...cookies, [name]: value };
}, {});