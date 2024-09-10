//Importação das libs do projeto
import React, { Component } from 'react';


//Definição de tipos para as props e state do componente
type CounterProps = {
    initialCount: number;
};

type CounterState = {
    count: number;
};

//Componente de classe que gerencia do contador
class Counter extends Component<CounterProps, CounterState> {

    constructor(props: CounterProps){
        super(props);
        //Inicializar o estado da prop 'initialCount'
        this.state = {
            count: props.initialCount
        };
    } //fim metodo construtor

    //Metodo para incrementar o contador
    //this.setState((prevState) => ({count: prevState.count + 1})); - jeito bonito
    increment = () => {
        this.setState(
            (prevstate) => ({
                count: prevstate.count + 1
            })
        );
    };

    //Metodo para fazer o render/return do componente
    render(){
        return (
            <div>
                <p>Contador: {this.state.count}</p>
                <button onClick={this.increment}>Incrementar</button>
            </div>
            
        );
    }

}

//exportar o componente

export default Counter;