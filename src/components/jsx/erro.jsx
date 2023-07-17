import React from 'react';
import './erro.css'

const Erro = () => {
    return (
        <div className='container'>
            <div className='erro-mensage'>
                <div className='header'></div>
                <div className='main'>
                    <div className='mensage'>
                        <span>Link inválido</span>
                        <span>Deseja voltar para a página anterior?</span>
                   
                    </div>
                    <div className='back-button'>
                    <div className='back'>Quero voltar</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Erro;