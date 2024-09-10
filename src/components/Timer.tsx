//Importação das libs
import React, { Component } from "react";

//definição de tipos
type TimerState = {
    seconds: number;
};

//Componente de classe que implementa Timer
class Timer extends Component<{}, TimerState>{
    private intervalId: NodeJS.Timeout | null = null;

    constructor(props: {}){
        super(props);
        this.state = {
            seconds: 0
        };
    }

    //Método do ciclo de vida chamado após a montagem do componente
    componentDidMount(): void {
        console.log('call componentDidMount');
        this.intervalId = setInterval(()=>{
            this.setState((prevState) => ({
                seconds: prevState.seconds + 1
            }));
        },1000);
    }


    //Método do ciclo de vida chamado antes de desmontar o componente
    componentWillUnmount(): void {
        if(this.intervalId) {
            clearInterval(this.intervalId);
            console.log('clearInterval componentWillUnmount');
            
        }
    }

    //renderizar o componente
    render() {
        return(
            <p> Timer: {this.state.seconds} segundos</p>
        );
    }
}

//exportar componente
export default Timer;