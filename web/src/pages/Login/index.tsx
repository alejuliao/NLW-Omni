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

function Login() {

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');


  return (
    <div id="page-login" className="container">

    <main>

    <form >
    <fieldset>
      <p className="title">Fazer login</p>
      
      <Input name="name" 
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
    

    <p>
      <legend>
        <a href="/">Lembrar-me</a>
        <a href="/">Esqueci minha senha</a>
      </legend>
    </p>


    <footer>
      <button>
        Entrar
      </button>
      <p>
        <span>
        Não tem conta?<br/>
        <Link to="/">cadastre-se</Link>
        </span>
  <span> É de graça <img src={purpleHeartIcon} alt="Coração roxo"/> </span>
      </p>
    </footer>
    </form>
  </main>
  </div>
  )
  
}


export default Login;