
// pegando os dados usando desctruct(desestruturação)
const Dados=({nivel, nome, senha})=>{

    return (
        <>
        <hr/>
        <p>O Nível do Usuário é: {nivel}</p>
        <p>O Nome do Usuário é: {nome}</p>
        <p>A Senha do Usuário é: {senha}</p>
        </>
    )
}
export default Dados