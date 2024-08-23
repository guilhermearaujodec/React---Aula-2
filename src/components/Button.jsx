const Button =()=>{

    // criando a função handleClick
    const handleClick=()=>{
        alert("Você clicou em um botão componente")
    }

    return (
        <>
        <button onClick={handleClick}>Botão do Componente</button>

        </>
    )
}

export default Button