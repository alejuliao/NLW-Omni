import React, { useState } from 'react';
// import React, { useState, FormEvent } from 'react';
// import { useHistory } from 'react-router-dom';
// import PageHeader from '../../components/PageHeader';
import './styles.css';
import Input from '../../components/Input';
import { Link } from 'react-router-dom';
// import warningIcon from '../../assets/images/icons/warning.svg';
// import Select from '../../components/Select';
// import api from '../../services/api';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

function Registration() {

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');


  return (
    <div id="page-registration" className="container">

    <main>

    <form >
    <fieldset>
      <p className="title">Cadastro</p>
      <p className="subtitle">Preencha os dados abaixo para começar.</p>
      
      <Input name="name" 
      label="" 
      placeholder="Nome"
      value={name} 
      onChange={(e) => {setName(e.target.value)}}
      />
      <Input 
      name="sobrenome" 
      label=""      
      placeholder="Sobrenome"
      value={avatar} 
      onChange={(e) => {setAvatar(e.target.value)}}
      />      <Input name="name" 
      label="" 
      placeholder="E-mail"
      value={name} 
      onChange={(e) => {setName(e.target.value)}}
      />
      <Input 
      name="avatar" 
      label=""      
      placeholder="Senha"
      value={avatar} 
      onChange={(e) => {setAvatar(e.target.value)}}
      />

    </fieldset>

    <footer>
      <button>
        Concluir cadastro
      </button>
    </footer>
    </form>
  </main>
  </div>
  )
  
}


export default Registration;