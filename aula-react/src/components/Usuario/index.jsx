function Usuario(props) {
    const estiloIdade = {
        color: props.idade < 18 ? 'red' : 'black'
    };

    return ( 
        <>
            <h2>Nome: {props.nome}</h2>
            <h2>Cidade: {props.cidade}</h2>
            <h2 style={estiloIdade}>
                Idade: {props.idade} {props.idade < 18 ? '(menor de idade)' : '(maior de idade)'}
            </h2>
        </>
    );
}
 
export default Usuario;