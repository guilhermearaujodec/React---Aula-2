import Button from './Button'


const HelloWorld =()=>{

    // declarando variáveis
    let nome = 'fiap';

    // criando a função clique normal
    // function clique(){
    //     alert("Olá DEV fiap")
    // }

    // criando uma função melhorada
    function clique(){
        alert(`Olá DEV, ${nome}`)
    }


    return (
        <>
        <p>HelloWorld</p>
        <p>Olá, DEV {nome}</p>
        <button onClick={clique}>Clique Aqui</button>
        <h3>Botão de um Componente</h3>
        <Button/>
        </>
    )
}
export default HelloWorld