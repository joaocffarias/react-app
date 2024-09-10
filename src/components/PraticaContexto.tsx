//Importação das libs
import React from "react";

//Componente que exibe o nome
const DisplayUser: React.FC<{ name: string}> = ({name}) => {
    return <p> Username: {name}</p>
};

//Componente que passa o nome através de props
const UserInfo: React.FC<{ name: string}> = ({name}) => {
    return <DisplayUser name={name} />;
};

//Componente principal que inicia o estado
const DisplayContextUser: React.FC = () => {
    const userName = "Aluno exemplo Contexto";
    return <UserInfo name={userName}/>;
};

export default DisplayContextUser;