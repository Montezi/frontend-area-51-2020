import React, {Component } from 'react';
import logo from './logo.svg';
import './LoginPage.css';
import {Button,Form,FormGroup,Label, Input}
from 'reactstrap';

import {FacebookLoginButton} from 'react-social-login-buttons';

class LoginPage extends Component {
  
  render() {
  return (
    <Form className="login-form">
        <h1>
          <span className="font-weight-bold">Tela de Login</span> 
         </h1>
        
        <h2 
        className="text-center">  Seja muito bem vindo 
        </h2>

    <FormGroup> 
        <Label>Email</Label>
        <Input type="email" placeholder="Email"/>
      </FormGroup>

    <FormGroup>
          <Label>Senha</Label>
          <Input type="password" placeholder="Senha"/>
    </FormGroup>
        
          <Button className="btn-lg btn-dark btn-block">
                Entrar
          </Button>
        
      <div className="text-center pt-3">
          Continue com a sua conta social 
      </div>
      <FacebookLoginButton className="mt-3 mb-3"/>
      
      <div className="text-center">
          <a href="/sign-up">Cadastrar-se</a>
            <span className="p-2">|</span>
          <a href="/forgot-password">Esqueci a minha senha</a>
      </div>
    </Form>
      

    );
  }
}

export default LoginPage;
