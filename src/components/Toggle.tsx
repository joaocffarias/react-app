//Importação das libs
import React, { useState } from "react";

//Definição de tipos para as props do componente
type ToggleProps = {
    initialState: boolean;
};

//Componente funcional para usar o 'hook' useState
const Toggle: React.FC<ToggleProps> = ({ initialState }) => {
    const [isOn, setIsOn] = useState(initialState);

    const ligar= () =>{
        setIsOn((prevIsOn) => !prevIsOn); 
    };

    return(
        <div>
            <p>Interruptor está: { isOn ? 'Ligado.' : 'Desligado.'}</p>
            <button onClick={ligar}>Ligar/Desligar</button>
        </div>
    );
};


//exportar o componente
export default Toggle;