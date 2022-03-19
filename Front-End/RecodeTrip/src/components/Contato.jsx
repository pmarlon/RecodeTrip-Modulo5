import React from 'react';

import './Contato.css'



const Contato = () => {
    return ( <div class="contato">
               <form>

                    <div>
                        <label>Nome Completo</label>
                        <input type="text" placeholder="Digite seu nome" name="nome" required autofocus/>
                    </div>
                    <div>
                        <label>E-mail</label>
                        <input type="email" placeholder="Digite seu e-mail" name="email" required/>
                    </div>
                    <div>
                        <label>Telefone</label>
                        <input type="text" placeholder="Digite seu telefone (opcional)" name="telefone"/>
                    </div>
                    <div>
                        <label>Assunto</label>
                        <input type="text" placeholder="Digite o motivo do contato" required/>
                    </div>
                    <div>
                        <label>Mensagem</label>
                        <textarea name="mensagem"  rows="5" required></textarea>
                    </div>
                    <div>
                        <input type="submit" value="Enviar"/>
                    </div>
                    </form> 
    </div> );
}
 
export default Contato;