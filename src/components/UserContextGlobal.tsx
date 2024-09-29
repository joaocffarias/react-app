//Importação das libs
import React, {createContext, useState, ReactNode} from "react";
//import DisplayUser from './PraticaContexto';

//Definição do tipo de contexto
type UserContextType = {
    name: string;
    setName: (name: string) => void;
};

//Criação do contexto com valores padrão
const UserContext = createContext<UserContextType | undefined>(undefined);


//Componente Provider que envolve os outros componentes
const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [name, setName] = useState("Faculdade IPOG");

    return (
        <UserContext.Provider value={{name, setName}}>
            {children}
        </UserContext.Provider>
    );
};

//Componente que consome o contexto
const DisplayUser: React.FC = () => {
    return (
        <UserContext.Consumer>
            {(context) => context ? <p>UserName: {context.name}</p> : null}
        </UserContext.Consumer>
    );
};

//Componente de apresentação
const DisplayUserContext: React.FC = () =>{
    return (
        <UserProvider>
            <DisplayUser />
        </UserProvider>
    );
};



//exportar o componente principal
export default DisplayUserContext