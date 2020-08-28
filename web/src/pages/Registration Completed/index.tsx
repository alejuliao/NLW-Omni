import React from 'react';
import './styles.css';
import Ok from '../../assets/images/ok.svg'

function RegistrationCompleted() {
  return (
    <div id="page-registration-completed" className="container" >
    <main>
      <img src={Ok} alt="Concluído"/>
      <p className="title">Cadastro concluído</p>
      <p className="subtitle">
        Agora você faz parte da plataforma da Proffy. <br/>
        Tenha uma ótima experiência.
      </p>

      <button>
        Fazer Login
      </button>

  </main>
  </div>
  )
  
}


export default RegistrationCompleted;