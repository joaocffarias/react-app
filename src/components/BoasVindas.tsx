//Importação das libs do arquivo
import React from "react";

//Definição de tipos para as props do componente
type BoasVindasProps = {
    firstName: string;
    lastName?: string; //A prop lastName é opcional

};

//Componente funcional para exibir  a mensagem
const BoasVindas: React.FC<BoasVindasProps> = ({ firstName, lastName }) =>{
    return (
        <h1>
            Ol&aacute;, {firstName} {lastName ? lastName : ''}
        </h1>
    );
};


//exportar o componente funcional
export default BoasVindas;