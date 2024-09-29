//Importação das libs utilizadas no projeto
import React from 'react';


//Definição de tipos para as props do componente
type HelloWorldProps = {
    name: string;
};

//criação do componente
//Componente funcional que recebe 'name' como prop
const HelloWorld: React.FC<HelloWorldProps> = ({name}) => {
    return <h1>Ol&aacute, {name}</h1>
};


//exportar o componente
export default HelloWorld;